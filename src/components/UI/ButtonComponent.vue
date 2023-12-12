<template>
    <button
        :class="type"
        @click="clickHandler()"
    >
        <slot></slot>
    </button>
</template>

<script>
    export default {
        methods: {
            clickHandler() {
                this.$emit('click')
            }
        },
        props: {
            type: {
                type: String,
                default: 'primary'
            }
        },
        emits: ['click']
    }
</script>

<style scoped>
    .primary {
        border-radius: 20px;
        border: none;
        height:40px;
        font-size: 20px;
        font-weight: 600;
        padding:0 15px;
        background-color: greenyellow;
    }
    .secondary {
        border-radius: 10px;
        border: 1px solid black;
        font-size: 16px;
        font-weight: 600;
        padding:0 15px;
    }
</style>