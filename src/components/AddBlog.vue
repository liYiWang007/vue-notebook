<template>
  <div class="add-blog" v-theme="'wide'">
    <!-- 传字符串‘wide’,限制div宽度为800 -->
    <h2 v-if="submmited">博客发布成功！</h2>
    <div class="edit-area" v-else>
      <h3>写博客</h3>
      <form action="">
        <div class="form-label">主题</div>
        <div class="form-content">
          <input type="text" v-model="blog.title" />
        </div>
        <div class="form-label">内容</div>
        <div class="form-content">
          <textarea
            v-model="blog.content"
            name=""
            id=""
            cols="30"
            rows="4"
          ></textarea>
        </div>
        <div class="form-label">分类</div>
        <div class="form-content">
          <input
            type="checkbox"
            name=""
            value="vue.js"
            v-model="blog.categories"
          /><label for="">vue.js</label>
          <input
            type="checkbox"
            name=""
            value="Augular4"
            v-model="blog.categories"
          /><label for="">Augular4</label>
          <input
            type="checkbox"
            name=""
            value="Node.js"
            v-model="blog.categories"
          /><label for="">Node.js</label>
          <input
            type="checkbox"
            name=""
            value="React.js"
            v-model="blog.categories"
          /><label for="">React.js</label>
        </div>
        <div class="form-label">作者</div>
        <div class="form-content">
          <select v-model="blog.aurthor" name="" id="">
            <option value="李狗剩">李狗剩</option>
            <option value="张虫哥">张虫哥</option>
            <option value="李桃桃">李桃桃</option>
          </select>
        </div>
        <!-- 不加.prevent会 添加失败 -->
        <button class="add-blog-btn" @click.prevent="pushBlog">添加博客</button>
      </form>
    </div>
    <div class="blog-preview">
      <h3>博客总览</h3>
      <p>博客标题：{{ blog.title }}</p>
      <p>博客内容：{{ blog.content }}</p>
      <ul>
        分类：
        <li v-for="(category, key) in blog.categories" :key="key">
          {{ category }}
        </li>
      </ul>
      <p>作者：{{ blog.aurthor }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddBlog",
  props: {
    msg: String,
  },
  data() {
    return {
      blog: {
        title: "",
        content: "",
        aurthor: "",
        categories: [],
      },
        submmited:false
    };
  },
  methods: {
    pushBlog: function () {
      //后期把链接换成自己的数据库就行
      this.$http
        .post('https://my-little-project-532c2-default-rtdb.firebaseio.com/posts.json', this.blog)
        // 旧版jsonplaceholder
        // .post("https://jsonplaceholder.typicode.com/posts", {
        //   //在这对对接数据名
        //   title: this.blog.title,
        //   body: this.blog.content,
        //   useId: 1,
        // })
        .then(function (data) {
          console.log(data);
          this.submmited=true
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.add-blog h3 {
  line-height: 60px;
  text-align: left;
}
.add-blog {
  margin: 0 auto;
  display: flex;
}
.edit-area,
.blog-preview {
  flex: 1;
}
.form-label {
  text-align: left;
  line-height: 30px;
}
.form-label::after {
  content: "：";
}
.form-content {
  text-align: left;
  margin-bottom: 20px;
}
.form-content input[type="text"],
.form-content textarea,
.form-content select {
  width: 100%;
  min-height: 30px;
  line-height: 30px;
  border-radius: 4px;
  border: 1px solid #ddd;
}
.form-content input[type="checkbox"] {
  margin-left: 12px;
}
.add-blog-btn {
  width: 120px;
  line-height: 40px;
  text-align: center;
  color: #ffffff;
  background: #409eff;
  margin-bottom: 20px;
}
button {
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid #409eff;
}

.blog-preview {
  padding-left: 1em;
  text-align-last: left;
}
.blog-preview p {
  line-height: 36px;
}
</style>
