<template>
    <select class="select" @change="valueChanged($event.target.value)" :value="value">
        <option
            v-for="(option, index) in options" :key="index"
            :value="option.value"
        >
            {{ option.name }}
        </option>
    </select>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        props: {
            options: {
                type:Array,
                default: () => [{value: '', name: ''}]
            },
            value: {
                type: String,
                default: '',
            },
        },
        methods: {
            valueChanged(value) {
                this.$emit('input', value);
                this.$emit('change');
            }
        },
        emits: ['input', 'change']
    }
</script>

<style scoped>
    .select {
        border-radius: 18px;
        font-weight: 600;
        padding: 10px;
        background-color: #d8ffde;
    }
</style>
