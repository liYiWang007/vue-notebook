<template>
<div class="show-blogs">
    <h1>SHOW BLOGS</h1>
    <input class="search-txt radius-4" type="text">
    <ul>
        <li class="blog-card radius-4" v-for="(item,index) in blogItems" :key="index">
            <h3 style="text-align-left">{{ item.title }}</h3>
            <article>{{ item.body }}</article>
        </li>
    </ul>
</div>
</template>

<script>
export default {
 name: 'ShowBlogs',
    data() {
        return {
            blogItems:[]
        };
    },
    created(){
        // 本地获取数据
        // vue-cli3 json文件要放在public里
        this.$http.get("../../data/posts.json")
        
        // 从网络获取数据
        // this.$http.get("https://jsonplaceholder.typicode.com/posts")
        .then(data => {
            // 截取前十条数据
            this.blogItems = data.body.slice(0,9)
            console.log(this.blogItems)
        })
    },
    methods: {},
    }
</script>
<style scoped>
.show-blogs{
    width: 500px;
    margin: 0 auto;
}
.search-txt{
    width: 100%;
    height: 46px;
line-height: 46px;
text-align: center;
border: 1px solid #ddd;
}
.blog-card{
    width: 100%;
    height: auto;
    padding: 20px;
    background: #f8f8f8;
border: 1px dashed #ddd;
margin-top: 20px;
box-sizing: border-box;
}
h3,article{
    white-space: normal;
    word-break: break-all;
}
</style>