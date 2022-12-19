<template>
  <div class="container">
    <h1>게시판</h1>
    <div>
      <table class="table-bordered w-100">
        <colgroup>
          <col>
          <col>
          <col>
        </colgroup>
        <thead>
        <tr>
          <td>번호</td>
          <td>제목</td>
          <td>내용</td>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, index) in articles" :key="item">
          <td> {{ index + 1 }}</td>
          <td><a :href="'/article/' + item.id"> {{ item.title }}</a></td>
          <td> {{ item.description }}</td>
        </tr>
        </tbody>
      </table>
    </div>

    <hr>
    <div>
      <form v-on:submit.prevent="postArticle">
        <input type="text" v-model="title" required>
        <input type="text" v-model="description" required>
        <button type="submit">제출</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ArticleList",
  data() {
    return {
      articles: [],
      boardId: 0,
      title: '',
      description: ''
    }
  },
  created() {
    this.boardId = this.$route.params.id
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios.get('http://localhost:8080/board/' + this.boardId + '/list')
          .then((res) => {
            console.log(res.data);
            this.articles = res.data.content;
          })
          .catch((error) => {
            console.log(error);
          })
    },
    postArticle() {
      axios.post('http://localhost:8080/article/post',
          {
            boardId: this.boardId,
            title: this.title,
            description: this.description
          }, {
            headers: {Authorization: sessionStorage.getItem('access')}
          })
          .then((res) => {
            console.log(this.boardId)
            console.log(res);
            this.title = '';
            this.description = '';
            this.fetchData();
          })
          .catch((error) => {
            console.log(error.response);
            alert(error.response.data.message);
          })
    }
  }
}
</script>

<style scoped>

</style>