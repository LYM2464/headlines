import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index.js'

Vue.config.productionTip = false
import "@/styles/reset.css";
import {
  Toast,
  Icon,
  NavBar,
  Uploader,
  Dialog,
  Field,
  Picker,
  Tab,
  Tabs
} from 'vant';
Vue.use(Toast)
  .use(Icon)
  .use(NavBar)
  .use(Uploader)
  .use(Dialog)
  .use(Field)
  .use(Picker)
  .use(Tab)
  .use(Tabs)
new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')