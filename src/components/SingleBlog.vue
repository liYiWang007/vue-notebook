<template>
  <div class="single-blog margin-a"  v-theme:padding="'small'">
    <div class="blog-card radius-4">
      <h1>{{ blogItems.title }}</h1>
      <p>{{ blogItems.aurthor }}</p>
      <ul>
          <li v-for="(item, index) in blogItems.categories" :key="index">
              {{ item }}
          </li>
      </ul>
      <section>{{ blogItems.content }}</section>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleBlog",
  data() {
    return {
      id: this.$route.params.id,
      blogItems: {},
    };
  },
// 升级版
created(){
    this.$http.get('https://my-little-project-532c2-default-rtdb.firebaseio.com/posts/' +
     this.id+'.json')
     .then(data => {
         console.log(data)
         return data.json()
     })
     .then(data => {
         this.blogItems = data
     })
},
//   基础版
// created() {
// this.$http
//     .get("https://jsonplaceholder.typicode.com/posts/" + this.id)
//     .then((data) => {
//     this.blogItems = data.body;
//     console.log(this.blogItems);
//     });
// },
  methods: {},
};
</script>
<style scoped>
</style>