<template>
  <div id = "app">
    <h1>My new vue app</h1>
    <p>{{msg}}</p>
    <ul>
      <!-- for loop -->
      <li v-for="post of posts" :key="post.id">
        {{post.title}}
      </li>
    </ul>

  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'App',
  data() {
    return (
        {
          msg: "Hello Sayantika",
          posts: [] // initial value = empty array
        }
      );
  },
  async created() {
    const response = await axios.get("http://localhost:3000/posts");
    this.posts = await response.data.data; // array
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
  margin-top: 60px;
}
</style>
