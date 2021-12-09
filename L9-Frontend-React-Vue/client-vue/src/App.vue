<template>
  <div id = "app">
    <h1>My new vue app</h1>
    <p>{{msg}}</p>
    <section>
      <form v-on:submit="addPosts">

        <label for="title">Title</label>
        <input id = "title" required autofocus v-model="title">

        <label for="content">Content</label>
        <textarea id = "content" v-model="content"></textarea>

        <label for="status">Status</label>
        <select id = "status" v-model="status">
          <option value="draft">Draft</option>
          <option value="under review">Under Review</option>
          <option value="published">Published</option>
        </select>

        <button type="submit">Submit</button>
    </form>
    </section>
    
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
          posts: [], // initial value = empty array
          title: "",
          content: "",
          status: "draft"
        }
      );
  },
  async created() {
    const response = await axios.get("http://localhost:3000/posts");
    this.posts = await response.data.data; // array
  },
  methods: {
    async addPosts(event){
      event.preventDefault();
      const response = await axios.post("http://localhost:3000/posts", {title: this.title, content: this.content, status: this.status});
      this.posts = [...this.posts, response.data.data];
      this.title = "";
      this.content = "";
      this.status = "draft";
    }
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

form{
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
  background-color: bisque;
  border-radius: 10px;
}

input{
  width: 80%;
}

textarea{
  min-width: 80%;
  max-width: 80%;
}

section{
  display: flex;
  justify-content: center;
}

label{
  margin-top: 20px;
}

button{
  margin: 20px 0;
  width: max-content;
}

li{
  text-align: left;
}

</style>
