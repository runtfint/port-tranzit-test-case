<template>
    <div class="users_table_view">
        <table class="table">
            <tr>
                <th>Avatar</th>
                <th>Fullname</th>
                <th>Birthday</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Location</th>
                <th>Национальность</th>
            </tr>
            <UsersTableRowComponent
                v-for="(user, index) in users" :key="index"
                :user="user"
            />
        </table>
    </div>
</template>

<script>
    import UsersTableRowComponent from './components/UsersTableRowComponent.vue'
    export default {
        props: {
            users: {
                type: Array,
                default: () => []
            },
        },
        components: {
            UsersTableRowComponent,
        }
    }
</script>

<style scoped>
    .table {
        background-color: #3ca444;
        color: #fff;
        width: 100%;
        border-radius: 20px;
        padding:10px;
        border-spacing: 1;
    }
</style>