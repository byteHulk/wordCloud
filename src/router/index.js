import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/homepage/homepage'
import content from '../components/content/content'
import login from '../components/login/login'
import chart from '../components/chart/chart'
import load from  '../components/load/load'
import detail from '../components/detail/detail'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      redirect: '/load'
    },
    {
      name: 'home',
      path: '/home',
      meta: {index: 0},
      component: home
    },
    {
      name: 'content',
      path: '/content',
      meta: {index: 1},
      component: content
    },
    {
      name: 'login',
      path: '/login',
      meta: {index: 0},
      component: login
    },
    {
      name: 'chart',
      path: '/chart',
      meta: {index: 1},
      component: chart
    },
    {
      name: 'load',
      path: '/load',
      meta: {index: 1},
      component: load
    },{
      name: 'detail',
      path: '/detail',
      meta: {index: 1},
      component: detail
    }
  ]
})
