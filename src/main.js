// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import fastclick from 'fastclick'
import router from './router'
import './common/stylus/index.styl'
import VueJsonp from 'vue-jsonp'
import md5 from 'js-md5'
import IscrollView from 'vue-iscroll-view'
import Iscroll from 'iscroll'
import echarts from 'echarts'
import VueLazyload from 'vue-lazyload'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(IscrollView, Iscroll)
Vue.use(VueLazyload)
Vue.prototype.$md5 = md5
Vue.use(VueJsonp)
fastclick.attach(document.body)
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.use(VueLazyload, {
  preLoad: 1.3,
  // error: 'dist/error.png',
  loading: 'loading.gif',
  attempt: 1
})
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(transition => {
  NProgress.done()
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'

})
