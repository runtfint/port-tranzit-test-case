<template>
    <div class="header">
        <div class="account_block">
            <span class="user">Ваша роль: {{ userPermissionName }}</span>
            <ButtonComponent @click="logoutButtonHandler()">Выйти</ButtonComponent>
        </div>
    </div>
</template>

<script>
    import ButtonComponent from '@/components/UI/ButtonComponent.vue'
    import { UserPermissions } from '@/constants/UserPermissions'
    import { mapGetters } from 'vuex'

    export default {
        data() {
            return {
                UserPermissions,
            }
        },
        methods: {
            logoutButtonHandler() {
                localStorage.removeItem('user_permission')
                this.$router.push('/login')
            }
        },
        computed: {
            ...mapGetters({
                myPermission: 'AuthModule/getUserPermission',
            }),
            userPermissionName() {
                const findedPermissionEntity = this.UserPermissions.find(permission => permission.slug === this.myPermission)
                return findedPermissionEntity.name
            }
        },
        components: {
            ButtonComponent,
        }
    }
</script>

<style scoped>
    .header {
        width: 100%;
        border-radius: 20px;
        background-color: #3ca444;
        padding: 15px;
    }
    .account_block {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .account_block .user {
        font-weight: 600;
        font-size: 20px;
        color: #fff;
    }
</style>