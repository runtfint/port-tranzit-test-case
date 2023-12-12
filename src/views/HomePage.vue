<template>
    <div class="home_wrapper">
        <HeaderComponent />
        <ControlsComponent
            @sortingChanged="setSort"
            @filtersChanged="setFilter"
            @refreshData="updateData"
            @dataShowVariantChanged="setDataShowVariant"
        />
        <div v-if="!loading.users" class="users_data">
            <UsersTableView v-if="dataShowVariant === 'table'" :users="viewportItems"/>
            <UsersCardView v-if="dataShowVariant === 'cards'" :users="viewportItems"/>
            <PaginationComponent
                v-model="page"
                :currentPage = "page"
                :boundary-count="2"
                :sibling-count="1"
                :total-pages="pageCount"
                :pageChangeHandler="pageChangeHandler"
            /> 
            <UserStatsComponent :usersData="usersData" />
        </div>
        <LoaderComponent v-else/>
    </div>
</template>

<script>
    import HeaderComponent from '@/components/HomePage/HeaderComponent.vue'
    import UsersTableView from '@/components/HomePage/UsersTableView/UsersTableView.vue'
    import UsersCardView from '@/components/HomePage/UsersCardView/UsersCardView.vue'
    import UserStatsComponent from '@/components/HomePage/UserStatsComponent.vue'
    import ControlsComponent from '@/components/HomePage/ControlsComponent.vue'
    import PaginationComponent from '@/components/UI/PaginationComponent.vue'
    import LoaderComponent from '@/components/UI/LoaderComponent.vue'
    import paginationMixin from "@/mixins/pagination.mixin"
    import { useUsers } from '@/hooks/useUsers'
    import { mapGetters } from 'vuex'

    export default {
        data() {
            return {
                loading: {
                    users: true
                },
                isTableShow: true,
                usersData: {},
                usersDataResults: [],
                sortedAndFilteredUsers: [],
                usersQuery: {
                    sort: 'original',
                    filter: 'none',
                }
            }
        },
        watch: {
            usersQuery: {
                deep: true,
                handler() {
                    useUsers(this.usersDataResults, this.usersQuery.sort, this.usersQuery.filter)
                        .then((res) => {
                            this.sortedAndFilteredUsers = res
                            this.setupPagination(this.sortedAndFilteredUsers)
                        })
                        .catch((err) => {
                            console.warn(err)
                        })
                }
            }
        },
        methods: {
            updateData() {
                this.fetchUsers()
            },

            fetchUsers() {
                this.loading.users = true
                this.$store.dispatch('UsersModule/onGetUsers')
                    .then((res) => {
                        this.usersData = res.data
                        this.usersDataResults = res.data.results
                        this.sortedAndFilteredUsers = res.data.results
                        this.setupPagination(this.sortedAndFilteredUsers)
                        this.page = 1
                        this.loading.users = false
                    })
                    .catch((err) => {
                        console.warn(err)
                        this.loading.users = false
                    })
            },
            setDataShowVariant(dataShowVariant) {
                this.$store.commit('UtilsModule/setDataShowVariant', dataShowVariant)
            },
            setSort(sort) {
                this.usersQuery.sort = sort
            },
            setFilter(filter) {
                this.usersQuery.filter = filter
            }
        },
        computed: {
            ...mapGetters({
                dataShowVariant: 'UtilsModule/getDataShowVariant'
            })
        },
        mounted() {
            this.fetchUsers()
        },
        mixins: [paginationMixin],
        components: {
            HeaderComponent, UsersTableView, UserStatsComponent, ControlsComponent, UsersCardView, PaginationComponent, LoaderComponent,
        }
    }
</script>

<style scoped>
    .home_wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 20px;
    }
    .users_data {
        display: flex;
        flex-direction: column;
        row-gap: 20px;
    }
</style>