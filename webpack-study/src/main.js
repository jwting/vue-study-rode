// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'Vue'
// 1. 导入 vue-router 包
import VueRouter from 'vue-router'
// 2. 手动安装 VueRouter 
Vue.use(VueRouter)


import app from './App.vue'

import router from './router.js'



/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: c => c(app),
  router
})
