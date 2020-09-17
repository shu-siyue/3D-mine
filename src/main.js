import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import ECharts from 'echarts'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import dataV from '@jiaminghi/data-view'

Vue.use(ElementUI);
Vue.use(ViewUI);
Vue.use(dataV)
Vue.prototype.$echarts = ECharts
Vue.prototype.$axios = axios

Vue.prototype.$rem = (rem) => {
  return document.documentElement.clientWidth / 1920 * 1.25 * 10 * rem
}

(function (doc, win, undefined) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (clientWidth === undefined) return;
      docEl.style.fontSize = 10 * (clientWidth / 1920 * 1.25) + 'px';
    };
  if (doc.addEventListener === undefined) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
