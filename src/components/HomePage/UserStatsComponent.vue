<template>
    <div class="stats_wrapper">
        <h2>Статистика</h2>
        <br>
        <div class="stats_body">
            <div class="stats_column">
                <span>Размер коллеции: {{ collectionSize }}</span>
                <span>Мужчин: {{ gendersCount.male }}</span>
                <span>Женщин: {{ gendersCount.female }}</span>
                <span>Неопределившихся: {{ gendersCount.unknown }}</span>
                <span>Больше: {{ gendersCount.isMore }}</span>
            </div>
            <div class="stats_column">
                <strong>Кол-во контактов по каждой национальности</strong>
                <table>
                    <tr v-for="(count, nat) in nationalityCount" :key="nat">
                        <td>{{nat}}</td>
                        <td>{{count}}</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import { countGenders } from '@/helpers/countGenders'
    import { countNationalities } from '@/helpers/countNationalities'
    export default {
        data() {
            return {
                collectionSize: this.usersData.info.results,
                usersResults: this.usersData.results,
                gendersCount: {
                    male: 0,
                    female: 0,
                    unknown: 0,
                    isMore: ''
                },
                nationalityCount: {}
            }
        },
        methods: {
            getStats() {
                countGenders(this.usersResults)
                    .then((res) => {
                        this.gendersCount = res
                    })
                    .catch((err) => {
                        console.warn(err)
                    })

                countNationalities(this.usersResults)
                    .then((res) => {
                        this.nationalityCount = res
                    })
                    .catch((err) => {
                        console.warn(err)
                    })
            }
        },
        props: {
            usersData: {
                type: Object,
                default: () => {}
            },
        },
        mounted() {
            this.getStats()
        }
    }
</script>

<style scoped>
    .stats_wrapper {
        background-color: #fff;
        border-radius: 20px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        font-size: 18px;
    }
    .stats_body {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .stats_column {
        display: flex;
        flex-direction: column;
    }
    .stats_column td {
        border-bottom: 1px solid #88ca8e;
    }
</style>