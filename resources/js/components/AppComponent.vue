<template>
    <h1>This is an app component</h1>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from "vue-class-component"
@Component
export default class AppComponent extends Vue {
    mounted() : void {
        console.log("hello");
    }
}
</script>
