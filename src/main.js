import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import $ from 'jquery'  
import './assets/js/rem.js'
import './assets/css/reset.css'

Vue.prototype.$ = $;

Vue.config.productionTip = false

Vue.prototype.global = {
    score:[
        {value:0,index:0,name:'想象力'},
        {value:0,index:1,name:'探索力'},
        {value:0,index:2,name:'生命力'},
        {value:0,index:3,name:'创造力'},
        {value:0,index:4,name:'决策力'}
    ] 
}

Vue.use(ElementUI)
var VueTouch = require('vue-touch')
Vue.use(VueTouch, { name: 'v-touch' })
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
