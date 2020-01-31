import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import mock from './mocks/mock';

Vue.config.productionTip = false

if (process.env.NODE_ENV === 'development'){
  mock.setup();
}


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
