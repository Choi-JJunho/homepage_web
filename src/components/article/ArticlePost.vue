<template>
  <div class="container">
    <form @submit.prevent="postArticle" class="mb-3">
      <div class="w-25 mb-3">
        <select v-model="boardId" class="form-select" aria-label="Default select example">
          <option v-for='board in boards' :key="board" :value="board.id">{{ board.title }}</option>
        </select>
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default">제목</span>
        <input v-model="title" type="text" class="form-control" aria-label="Sizing example input"
               aria-describedby="inputGroup-sizing-default">
      </div>

      <!-- TODO : add TextEditor -->
      <div class="form-floating">
        <textarea v-model="description" class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                  style="height: 100px"></textarea>
        <label for="floatingTextarea2">본문내용</label>
      </div>

      <div class="mt-3 text-end">
        <button class="btn btn-primary" type="submit">작성</button>
      </div>
    </form>

  </div>
</template>

<script>
export default {
  name: "ArticleView",
  data() {
    return {
      boardId: 1,
      title: '',
      description: '',
      boards: []
    }
  },
  created() {
    this.fetchData();
    console.log()
  },
  methods: {
    fetchData() {
      this.axios.get('http://localhost:8080/board/list')
          .then((res) => {
            this.boards = res.data;
          })
          .catch((error) => {
            console.log(error);
          });
    },
    postArticle() {
      this.axios.post('http://localhost:8080/article/post',
          {
            boardId: this.boardId,
            title: this.title,
            description: this.description
          }, {
            headers: {Authorization: sessionStorage.getItem('accessToken')}
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