<template>
    <div class="login_wrapper">
        <span class="title">Вход</span>
        <PermissionSelector @selectedPermission="setPermission"/>
        <ButtonComponent @click="loginButtonHandler()">Войти</ButtonComponent>
    </div>
</template>

<script>
    import PermissionSelector from '@/components/LoginPage/PermissionSelector.vue'
    import ButtonComponent from '@/components/UI/ButtonComponent.vue'

    export default {
        data() {
            return {
                selectedPermission: 'user',
            }
        },
        methods: {
            setPermission(permission){
                this.selectedPermission = permission
            },
            loginButtonHandler() {
                this.$store.commit('AuthModule/setUserPermission', this.selectedPermission)
                this.$router.push('/')
            }
        },
        components: {
            PermissionSelector, ButtonComponent,
        }
    }
</script>

<style scoped>
    .login_wrapper {
        background-color: #3ca444;
        padding: 50px;
        border-radius: 20px;
        color: #fff;
        display: flex;
        flex-direction: column;
        row-gap: 30px;
    }
    .title {
        font-size: 60px;
        font-weight: 600;
    }
</style>