import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
Vue.config.productionTip = false
Vue.directive('loading',{
  inserted(el,binding){
    binding.value ? el.classList.add('loading') : el.classList.remove('loading')
  },
  update(el,binding){
    binding.value ? el.classList.add('loading') : el.classList.remove('loading')
  }
})
new Vue({

  render: h => h(App),
  router
}).$mount('#app')
