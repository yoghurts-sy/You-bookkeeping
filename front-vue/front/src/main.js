import Vue from 'vue'
import App from './App'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false
App.mpType = 'app'

wx.cloud.init({
  traceUser: true
})

const app = new Vue(App)
app.$mount()
