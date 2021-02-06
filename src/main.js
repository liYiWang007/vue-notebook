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

/* 自定义指令
** Vue.directive('指令的名字','{对象
**  捕捉到要使用这个自定义指令后会自动触发这个叫bind的方法
**  bind=只调用一次
**  bind(元素){
**    方法
**  }
**})
**
*/
Vue.directive('rainbow', {
  bind(el) {
    // Math.random() 输出0到1(包括0，不包含1)的随机数(都是十位的小数)。
    // toString(16)将随机数转换为16进制的字符串。
    // slice(2,8)从小数点后开始截取，截取6位数
    // 简而言之
    // Math.random().toString(16).slice(2,8)。
    // 可以生成6位数的16进制随机数。
    el.style.color = "#" + Math.random().toString(16).slice(2, 8)
  }
})
Vue.directive('theme', {
  bind(el, binding) {
    // Math.random() 输出0到1(包括0，不包含1)的随机数(都是十位的小数)。
    if (binding.value == 'wide') {//调用wide的地方一定要加 '单引号'
      el.style.width = '800px'
      console.log('我是在main.js里定义的指令 theme')
    } else if (binding.value == 'small') {
      el.style.width = '400px'
    }
    if (binding.arg == 'padding') {
      el.style.padding = '20px'
      console.log('我是main.js里的theme,相当于v-on:click里的click')
    }
  }
})


// 自定义过滤器
// 大写
Vue.filter('to-uppercase', function(value) {
  return value.toUpperCase()
})

// 自定义过滤器
// 文章只展示100个字,后接...
Vue.filter('snippet', function(value) {
  return value.slice(0,100) + '...'
})

// 配置路由
const router = new VueRouter({
  routes: [
    { path: '/', component: ShowBlogs },
    { path: '/AddBlog', component: AddBlog },
  ],
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
