<template>
  <div class="main-contents">
    <h1></h1>
    <form v-on:submit.prevent="fetchData">
      <input type="text" v-model="searchQuery">
    </form>
    <div class="d-flex justify-content-center">
      <table class="table-bordered">
        <colgroup>
          <col>
          <col>
          <col>
        </colgroup>
        <thead>
        <tr>
          <td>id</td>
          <td>이름</td>
          <td>계정</td>
          <td>이메일</td>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in users" :key="item">
          <td> {{ item.id }}</td>
          <td> {{ item.name }}</td>
          <td> {{ item.account }}</td>
          <td> {{ item.email }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "MainComponent",
  data() {
    return {
      users: [],
      searchQuery: "",
      page: 0,
      size: 10,
      sort: ""
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios.get('http://localhost:8080/users',
          {
            params: {
              keyword: this.searchQuery
            }
          }
      )
          .then((res) => {
            console.log(res.data);
            this.users = res.data.content;
          }).catch((error) => {
        console.log(error);
      })
    }
  }
}
</script>

<style scoped>
.main-contents {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>