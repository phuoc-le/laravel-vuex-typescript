<template>
    <div>
        <span>Test</span>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from "vue-class-component"

    @Component
    export default class UserInfoComponent extends Vue {
        mounted() : void {
            console.log("hello");
        }
        private user: any;

    }
</script>
