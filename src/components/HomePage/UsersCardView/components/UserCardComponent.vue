<template>
    <div class="user_card">
        <div class="img">
            <img :src="user.picture.large" loading="lazy" @load="imageLoaded">
            <div class="img_loading" v-if="imageLoading">
                <LoaderComponent />
            </div>
        </div>
        <div class="user_card_data">
            <div class="user_card_data_row">
                <span class="name">{{ `${user.name.title} ${user.name.first} ${user.name.last}` }}</span>
            </div>
            <div class="user_card_data_row">
                <ion-icon name="balloon-outline"></ion-icon>
                <span>{{ `${userBirthDate(user.dob.date)}, ${user.dob.age} ` }}</span>
            </div>
            <div class="user_card_data_row">
                <ion-icon name="mail-outline"></ion-icon>
                <span @click="copyHandler(user.email)">{{ user.email }}</span>                
            </div>
            <div class="user_card_data_row">
                <ion-icon name="call-outline"></ion-icon>
                <span @click="copyHandler(user.phone)">{{ user.phone }}</span>                
            </div>
            <div class="user_card_data_row">
                <ion-icon name="location-outline"></ion-icon>
                <span>{{ `${user.location.country}, ${user.location.city}` }}</span>                
            </div>
            <div class="user_card_data_row">
                <ion-icon name="flag-outline"></ion-icon>
                <span>{{ user.nat }}</span>                
            </div>


        </div>
    </div>
</template>

<script>
    import { copyHandler } from '@/helpers/copyHandler';
    import LoaderComponent from '@/components/UI/LoaderComponent.vue'
    import { birthdateFormatterConfig } from '@/configs/birthdateFormatterConfig';

    export default {
        data() {
            return {
                copyHandler,
                birthdateFormatterConfig,
                imageLoading: true,
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
            },
            imageLoaded() {
                this.imageLoading = false;
            }
        },
        components: {
            LoaderComponent,
        },
    }
</script>

<style scoped>
    .user_card {
        background-color: #3CA444;
        border-radius: 20px;
        padding: 20px;
        width: 350px
    }
    .img {
        width: 100%;
    }
    .img img {
        width: 100%;
    }
    .img .img_loader {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .user_card_data {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        row-gap:10px;
        color: #FFF;
    }
    .user_card_data_row {
        display: flex;
        align-items:center;
        column-gap: 10px;
    }
    .name {
        font-size: 20px;
        font-weight:600;
    }

</style>
