import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import showkey from './views/ShowKey'
import showname from './views/ShowName'
Vue.use(VueRouter)
Vue.config.productionTip = false
const router = new VueRouter({
    routes:[
      {
        path:'/showkey',component:showkey
      },
      {
        path:'/showname',component:showname
      }
    ]
})
new Vue({

  render: h => h(App),
  router,
}).$mount('#app')
