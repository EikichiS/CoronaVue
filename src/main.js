import Vue from 'vue'
import App from './App.vue'
import router from './router';
import vuetify from './plugins/vuetify';
import VueLoaders from 'vue-loaders';
import 'vue-loaders/dist/vue-loaders.css';

Vue.config.productionTip = false;
Vue.use(VueLoaders);

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
