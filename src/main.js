import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import showkey from './views/showkey'
Vue.use(VueRouter)
Vue.config.productionTip = false
const router = new VueRouter({
    routes:[
      {
        path:'/showkey',component:showkey
      }
    ]
})
new Vue({

  render: h => h(App),
  router,
}).$mount('#app')
