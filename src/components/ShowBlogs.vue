<template>
  <div class="show-blogs" v-theme:padding="'small'">
    <!-- wide一定记得加单引号'' 让系统识别这个是字符串，而不是具体值 -->
    <!-- 传对象就用 [方括号] -->
    <h1>SHOW BLOGS</h1>
    <input v-model="search" class="search-txt radius-4" type="text" />
    <ul>
      <li
        class="blog-card radius-4"
        v-for="(item, index) in filteredBlogs"
        :key="index"
      >
        <router-link :to="'/blog/' + item.id"
          ><h3 style="text-align-left" v-rainbow>
            {{ item.title | toUppercase }}
          </h3></router-link
        >
        <!-- 只展示100个字 -->
        <article>{{ item.content | snippet }}</article>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ShowBlogs",
  data() {
    return {
      blogItems: [],
      search: "",
    };
  },
  // 升级版 从网上拉取数据并自定义数据名称
  created() {
    this.$http
      .get(
        "https://my-little-project-532c2-default-rtdb.firebaseio.com/posts.json"
      )
      .then((data) => {
        console.log(data.json);
        return data.json();
      })
      .then((data) => {
        const blogsArray = [];
        for (let key in data) {
          // 校验key
          console.log(key);

          // 赋值，id的值=key值
          data[key].id = key;

          // 校验网页是否有id这个参数
          // console.log(data[key]);

          // 把获取的值push到新定义的数组里
          blogsArray.push(data[key]);
        }
        // console.log(blogsArray);

        // 把获得的blogsArray值赋给blogsItem
        this.blogItems = blogsArray;
      });
  },

  // 基础版
  // created() {
  // 本地获取数据
  // vue-cli3 json文件要放在public里
  // .get("../../data/posts.json")

  // 从网络获取数据
  // this.$http.get("https://jsonplaceholder.typicode.com/posts")
  // .then((data) => {
  // 截取前十条数据
  // this.blogItems = data.body.slice(0, 19);
  // })
  // },
  computed: {
    filteredBlogs: function () {
      //根据input的search过滤显示的内容，如果search为空，则显示全部内容
      return this.blogItems.filter((blog) => {
        return blog.title.match(this.search);
      });
    },
  },
  // 局部使用自定义指令
  // 自定义过滤器
  filters: {
    // 方法一 ES6写法
    // 标题改大写
    toUppercase(value) {
      return value.toUpperCase();
    },
    // 方法二 传统写法
    // 文章只展示100个字,后接 '...'
    snippet: function (value) {
      return value.slice(0, 100) + "...";
    },
  },
  //局部自定义指令 directives
  // directives: {
  // rainbow: {
  //     bind(el) {
  //     // Math.random() 输出0到1(包括0，不包含1)的随机数(都是十位的小数)。
  //     // toString(16)将随机数转换为16进制的字符串。
  //     // slice(2,8)从小数点后开始截取，截取6位数
  //     // 简而言之
  //     // Math.random().toString(16).slice(2,8)。
  //     // 可以生成6位数的16进制随机数。
  //     el.style.color = "#" + Math.random().toString(16).slice(2, 8);
  //     },
  // }
  // },
  methods: {},
};
</script>
<style scoped>
.show-blogs {
  margin: 0 auto;
}
.search-txt {
  width: 100%;
  height: 46px;
  line-height: 46px;
  text-align: center;
  border: 1px solid #ddd;
}
.blog-card {
  width: 100%;
  height: auto;
  padding: 20px;
  background: #f8f8f8;
  border: 1px dashed #ddd;
  margin-top: 20px;
  box-sizing: border-box;
}
h3,
article {
  white-space: normal;
  word-break: break-all;
}
</style>