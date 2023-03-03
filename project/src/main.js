import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
import { Lazyload } from 'vant';
import store from './store'

import LongPop from './components/longPop/index'
Vue.use(LongPop);

import water from "vue-waterfall2";

Vue.use(water);

Vue.config.productionTip = false
Vue.use(Vant);
Vue.use(Lazyload);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
