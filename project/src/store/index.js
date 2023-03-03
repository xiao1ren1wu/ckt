import Vue from 'vue'
import Vuex from 'vuex'
import searchStore from './searchStore';

import { VuexPersistence } from 'vuex-persist';

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
})

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
       
    },
    mutations: {
        
    },

    actions: {

    },

    modules: {
        searchStore
    },
    plugins: [
        vuexLocal.plugin
    ]
})