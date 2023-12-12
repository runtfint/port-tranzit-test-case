<template>
    <div class="controls">
        <div class="control_block">
            <span class="control_block_header">Сортировка</span>
            <SelectComponent @change="sortingChanged" v-model="selectedSort" :options="sortOptions"/>
        </div>
        <div class="control_block" v-if="userPermission === 'admin'">
            <span class="control_block_header">Фильтры</span>
            <div class="filter">
                <span>По имени</span>
                <TextInputComponent @change="filtersChanged" v-model="filters.name" :placeholder="'Начните вводить...'"/>
            </div>
            <div class="filter">
                <span>По полу</span>
                <SelectComponent @change="filtersChanged" v-model="filters.gender" :options="genderFilterOptions"/>
            </div>
            <div class="filter">
                <span>По национальности</span>
                <SelectComponent @change="filtersChanged" v-model="filters.nationality" :options="nationalitiesOptions"/>
            </div>
            <div class="filter">
                <ButtonComponent :type="'secondary'" @click="clearFiltersButtonHandler()">Очистить фильтры</ButtonComponent>
            </div>
        </div>
        <div class="control_block">
            <span class="control_block_header">Режим отображения</span>
            <SelectComponent @change="dataShowVariantChanged" v-model="selectedDataShowVariant" :options="dataShowVariantOptions"/>
        </div>
        <div class="control_block">
            <ButtonComponent @click="refreshButtonHandler()">Обновить данные</ButtonComponent>
        </div>
    </div>
</template>

<script>
    import SelectComponent from '@/components/UI/SelectComponent.vue';
    import ButtonComponent from '@/components/UI/ButtonComponent.vue';
    import TextInputComponent from '@/components/UI/TextInputComponent.vue';
    import { sortOptions, genderFilterOptions, dataShowVariantOptions } from '@/constants/Controls'
    import { UserPermissions } from '@/constants/UserPermissions';
    import { mapGetters } from 'vuex';

    export default {
    data() {
        return {
            sortOptions,
            UserPermissions,
            genderFilterOptions,
            dataShowVariantOptions,
            selectedSort: 'original',
            filters: {
                name: '',
                gender: '',
                nationality: ''
            }
        };
    },
    computed: {
        ...mapGetters({
            nationalitiesOptions: 'UtilsModule/getNationalities',
            userPermission: 'AuthModule/getUserPermission',
        }),
        selectedDataShowVariant: {
            get() {
                return this.$store.getters['UtilsModule/getDataShowVariant'];
            },
            set(value) {
                this.$store.commit('UtilsModule/setDataShowVariant', value);
            }
        },
    },
    methods: {
        dataShowVariantChanged() {
            this.$emit('dataShowVariantChanged', this.selectedDataShowVariant)
        },
        sortingChanged() {
            this.$emit('sortingChanged', this.selectedSort)
        },

        filtersChanged() {
            this.$emit('filtersChanged', this.filters)
        },

        refreshButtonHandler() {
            this.$emit('refreshData')
        },

        clearFiltersButtonHandler() {
            this.filters = {
                name: '',
                gender: '',
                nationality: ''
            }
            this.filtersChanged()
        }
    },
    
    emits: ['sortingChanged', 'filtersChanged', 'refreshData', 'dataShowVariantChanged'],
    components: { SelectComponent, ButtonComponent, TextInputComponent }
}
</script>

<style scoped>
    .controls {
        background-color: #fff;
        width: 100%;
        border-radius: 20px;
        padding: 15px;
        display: flex;
        flex-direction: row;
        column-gap: 50px;
        align-items: flex-start;
    }
    .control_block {
        display: flex;
        flex-direction: column;
        row-gap: 10px;
    }
    .control_block_header {
        font-size: 20px;
        font-weight: 600;
    }
    .filter {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-weight: 500;
        font-size: 18px;
        column-gap: 10px;
    }
</style>
