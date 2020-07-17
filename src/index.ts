 
import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import VueResource from 'vue-resource'

import App from 'pages/App.vue'
import store from 'store/store'

Vue.use(VueMaterial)
Vue.use(VueResource)

new Vue({
    el: '#app',
    store,
    render: a => a(App)
})