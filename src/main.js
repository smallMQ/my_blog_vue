import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false
// import APlayer from '@moefe/vue-aplayer'
// Vue.use(APlayer, {
//     defaultCover: 'https://github.com/u3u.png',
//     productionTip: true,
// });
import 'github-markdown-css/github-markdown.css'


import axios from 'axios'
Vue.prototype.$axios = axios;



import '@/assets/css/global.css'


import cookies from 'vue-cookies'
Vue.prototype.$cookies = cookies;

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);





new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
