<template>
    <tr>
        <td>
            <img class="avatar" :src="user.picture.thumbnail">
        </td>
        <td>{{ `${user.name.title} ${user.name.first} ${user.name.last}` }}</td>
        <td>{{ `${userBirthDate(user.dob.date)}, ${user.dob.age} ` }}</td>
        <td @click="copyHandler(user.email)">{{ user.email }}</td>
        <td @click="copyHandler(user.phone)">{{ user.phone }}</td>
        <td>{{ `${user.location.country}, ${user.location.city}` }}</td>
        <td>{{ user.nat }}</td>
    </tr>
</template>

<script>
    import { copyHandler } from '@/helpers/copyHandler';
    import { birthdateFormatterConfig } from '@/configs/birthdateFormatterConfig';

    export default {
        data() {
            return {
                copyHandler,
                birthdateFormatterConfig,
            }
        },
        props: {
            user: {
                type: Object,
                default: () => {}
            }
        },
        methods: {
            userBirthDate(date) {
                const userDate = new Date(date)
                return this.birthdateFormatterConfig.format(userDate)
            }
        },
    }
</script>

<style scoped>
    td {
        text-align: center;
        border-bottom: 1px solid #88ca8e;
    }
    .avatar {
        width: 48px;
        height: 48px;
    }
</style>
