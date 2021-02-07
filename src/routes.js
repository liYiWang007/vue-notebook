// 路由
import ShowBlogs from './components/ShowBlogs.vue'
import AddBlog from './components/AddBlog.vue'
import SingleBlog from './components/SingleBlog.vue'

// export一个路由数组
export default[
    { path: '/', component: ShowBlogs },
    { path: '/AddBlog', component: AddBlog },
    { path: '/blog/:id', component: SingleBlog },
]