import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { initAnalytics, trackPage } from './analytics'

Vue.config.productionTip = false

initAnalytics()
router.afterEach((to) => {
  trackPage(to.path, String(to.name || to.path))
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
