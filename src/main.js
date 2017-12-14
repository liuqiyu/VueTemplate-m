// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import 'mint-ui/lib/style.css'  // 引用mint-ui样式
import 'element-ui/lib/theme-chalk/index.css'   // 引用element-ui样式
import 'lib-flexible'   // 引用flexible
import './assets/style/reset.css'
import './assets/font/iconfont.css'
import './app-ui'

Vue.use(VueResource)
Vue.config.productionTip = false

// router.beforeEach((to, from, next) => {
//   console.log(to)
//   console.log(from)
//   console.log(next)
//   next()
// })

router.afterEach((to, from) => {
  console.log(to)
  console.log(from)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
