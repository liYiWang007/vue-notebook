import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

// 引入resource才能使用$http 
import VueResource from 'vue-resource'
import ShowBlogs from './components/ShowBlogs.vue'
import AddBlog from './components/AddBlog.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)

// 配置路由
const router = new VueRouter({
  routes: [
    { path: '/', component: ShowBlogs},
    { path: '/AddBlog', component: AddBlog},
  ],
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
