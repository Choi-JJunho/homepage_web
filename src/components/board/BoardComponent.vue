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
        <tr v-for="(item, index) in boards" :key="item">
          <td> {{ index + 1 }}</td>
          <td><a :href="'/board/' + item.id + '/list'"> {{ item.title }}</a></td>
          <td> {{ item.description }}</td>
        </tr>
        </tbody>
      </table>
    </div>

    <hr>

    <div>게시판 추가하기</div>
    <form v-on:submit.prevent="postBoard">
      게시판 제목 <input type="text" v-model="boardTitle" required>
      게시판 설명 <input type="text" v-model="boardDescription">
      <button type="submit" class="btn btn-primary ms-4">생성</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "BoardComponent",
  data() {
    return {
      boards: [],
      boardTitle: '',
      boardDescription: ''
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios.get('http://localhost:8080/board/list')
          .then((res) => {
            console.log(res.data);
            this.boards = res.data;
          })
          .catch((error) => {
            console.log(error);
          })
    },
    postBoard() {
      axios.post('http://localhost:8080/board/post',
          {
            title: this.boardTitle,
            description: this.boardDescription
          }, {
            headers: {Authorization: sessionStorage.getItem('access')}
          })
          .then((res) => {
            console.log(res);
            this.boardTitle = '';
            this.boardDescription = '';
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