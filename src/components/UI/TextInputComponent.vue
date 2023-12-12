<template>
    <input class="input" type="text" @input="valueChanged($event.target.value)" :placeholder="placeholder" :value="value">
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        props: {
            value: {
                type: String,
                default: '',
            },
            placeholder: {
                type: String,
                default: ''
            }
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
    .input {
        border-radius: 18px;
        font-weight: 600;
        padding: 10px;
        background-color: #d8ffde;
    }
</style>