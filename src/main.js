import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)
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
