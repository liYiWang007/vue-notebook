<template>
  <div id="app">
    <Header v-rainbow></Header>
<router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
.radius-4{
  border-radius: 4px;
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
.margin-a{
  margin: 0 auto;
}
</style>
