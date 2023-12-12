<template>
    <label class="radio">
        <input type="radio"
            :name="name"
            :checked="isChecked"
            @click="onClick(value)"
        >
        <span class="radiomark"></span>
    </label>
</template>

<style scoped>
    .radio {
        display: block;
        position: relative;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        width: 25px;
        height: 25px;
    }

    .radio input {
        position: absolute;
        opacity: 0;
    }

    .radio input:checked ~ .radiomark {
        background-color: #fff;
    }
    .radio input:checked ~ .radiomark:after {
        display: block;
    }

    .radio .radiomark:after {
        left: 4px;
        top: 4px;
        width: 16px;
        height: 16px;
        background-color: #3ca444;
        border-radius: 50%;
    }

    .radiomark {
        position: absolute;
        top: 0;
        right: 0;
        height: 24px;
        width: 24px;
        box-sizing: border-box;
        border-radius: 50%;
        background-color: #fff;
    }

    .radiomark:after {
        content: "";
        position: absolute;
        display: none;
    }
</style>

<script>
    export default {
        props: {
            onClick: {
                type: Function,
                default: null
            },
            value: {
                type: [Number, String],
                default: 0
            },
            isChecked: {
                type: Boolean,
                default: false
            },
            name: {
                type: String,
                default: ""
            }
        }
    }
</script>