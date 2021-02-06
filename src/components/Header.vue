<template>
  <ul class="nav">
    <li @click="showType=true" :class="showType ? 'is-active' : ''">
      <router-link to="/">博客</router-link>
    </li>
    <li @click="showType=false" :class="showType ? '' : 'is-active'">
      <router-link to="/AddBlog">写博客</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      showType: true,
    };
  },
  methods: {},
};
</script>
<style scoped>
.nav{
  width: 100%;
  text-align: center;
  height: 60px;
  padding-top: 21px;
  background: #409EFF;
  overflow: hidden;
}
.nav li{
  display: inline-block;
  height: 24px;
  margin: 0 24px;
  border-bottom: 2px solid transparent;
}
.nav li a{
  font-weight: bold;
  color: #ffffff;
}
.nav li.is-active{
  border-bottom-color: #fff;
}
</style>