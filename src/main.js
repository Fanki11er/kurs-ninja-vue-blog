import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Routes from './routs';

Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(VueRouter);

/*Vue.directive('rainbow', {
  bind(el, binding, vnode){
    el.style.color = "#" + Math.random().toString().slice(2,8);
  }
});*/

const router = new VueRouter({
  routes: Routes,
  mode: 'history',
})

Vue.directive('theme', {
  bind(el, binding, vnode){
    if(binding.value == 'wide')
      el.style.maxWidth = '1200px';
    else if(binding.value == 'narrow')
      el.style.maxWidth = '560px';

    if(binding.arg == 'column'){
      el.style.background = '#ddd';
      el.style.padding = '20px';
    }
  }
});

/*Vue.filter('to-upper', function(value){
  return value.toUpperCase();
})*/

Vue.filter('snipet', function(value){
  return value.slice(0, 100) + '...';
})

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
