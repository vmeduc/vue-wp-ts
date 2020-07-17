import Vue from 'vue'

import App from 'pages/App.vue'

import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
    state: {

    },
    mutations: {
        
    }
})

new Vue({
    el: '#app',
    store,
    render: a => a(App)
});