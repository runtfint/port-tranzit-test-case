<template>
    <div class="permission_selector">
        <div
            class="permission"
            v-for="permission in UserPermissions" :key="permission.id"
        >
            <RadioButtonComponent
                :onClick="selectPermission"
                :value="permission.slug"
                :isChecked="permission.slug === selectedPermission"
                :name="'permssion'"
            />
            <div class="permission_label">{{ permission.name }}</div>
        </div>
    </div>
</template>

<script>
    import RadioButtonComponent from '@/components/UI/RadioButtonComponent.vue'
    import { UserPermissions } from '@/constants/UserPermissions'

    export default {
        data() {
            return {
                UserPermissions,
                selectedPermission: 'user',
            }
        },
        methods: {
            selectPermission(permissionId) {
                this.selectedPermission = permissionId
                this.$emit("selectedPermission", permissionId)
            },
        },
        emits: ['selectedPermission'],
        components: {
            RadioButtonComponent,
        }
    }
</script>

<style scoped>
    .permission_selector {
        display: flex;
        flex-direction: column;
        row-gap:15px;
    }
    .permission {
        display: flex;
        flex-direction: row;
        align-items: center;
        column-gap: 15px;
    }
    .permission_label {
        font-size:20px;
    }
</style>