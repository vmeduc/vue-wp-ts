import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

import App from 'pages/App.vue'

Vue.use(VueMaterial);

new Vue({
    el: '#app',
    render: a => a(App)
});