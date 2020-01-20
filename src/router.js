import Vue from 'vue'
import Router from 'vue-router'
import Loading from './views/Loading'
import Answergame from './views/Answergame'
import question from './components/question'
import Result from './views/Result'
import Home from './views/Home'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Loading',
      component: Loading
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/answer',
      name: 'Answergame',
      component: Answergame
    },
    {
        path:'/result',
        name:'Result',
        component:Result
    }

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
