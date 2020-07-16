import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import VueResource from 'vue-resource'

import App from 'pages/App.vue'

Vue.use(VueMaterial)
Vue.use(VueResource)

new Vue({
    el: '#app',
    render: a => a(App)
})