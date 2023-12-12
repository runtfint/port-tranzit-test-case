<template>
    <div class="users_card_view">
        <UserCardComponent
            v-for="(user, index) in users" :key="index"
            :user="user"
        />
    </div>
</template>

<script>
    import UserCardComponent from './components/UserCardComponent.vue'

    export default {
        props: {
            users: {
                type: Array,
                default: () => []
            },
        },
        components: {
            UserCardComponent,
        }
    }
</script>

<style scoped>
    .users_card_view {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        row-gap: 20px;
    }
</style>
