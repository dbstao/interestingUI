<template>
    <button :className="`${Style[size]} ${Style[type]} ${type !== 'default' ? Style['color-white'] : ''}`"
        :disabled="disabled">
        <slot></slot>
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Style from "./index.module.scss";

export default defineComponent({
    props: {
        type: {
            default: "default",
        },
        size: {
            default: "default",
        },
        disabled: {
            default: false,
        },
        color: {
            type: String
        }
    },
    setup() {
        return {
            Style
        }
    },
})
</script>
