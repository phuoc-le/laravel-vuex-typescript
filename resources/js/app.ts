import "./bootstrap"
import Vue from "vue"
import router from './router'
import store from './store/index'
import AppComponent from "./components/AppComponent.vue"

Vue.component('example', AppComponent)

new Vue({
    el: '#app',
    router,
    store
});
