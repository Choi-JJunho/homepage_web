<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <div>
      {{ description }}
    </div>
    <div class="card">
      <div class="d-flex justify-content-around">
        <span>
          작성자 : {{ creator.name }}
        </span>
        <span>
          수정자 : {{ modifier.name }}
        </span>
      </div>
      <div class="d-flex justify-content-around">
        <span>생성일 : {{ createDate }} </span>
        <span>수정일 : {{ createDate }} </span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "ArticleView",
  data() {
    return {
      articleId: 0,
      title: '',
      description: '',
      creator: [],
      modifier: [],
      createDate: Date,
      updateDate: Date,
    }
  },
  created() {
    this.fetchData();
    console.log()
  },
  methods: {
    fetchData() {
      this.axios.get('http://localhost:8080/article/' + this.$route.params.id)
          .then((res) => {
            let temp = res.data;
            this.title = temp.title;
            this.description = temp.description;
            this.createDate = new Date(temp.createDate).toDateString();
            this.updateDate = new Date(temp.updateDate).toDateString();
            this.creator = temp.creator;
            this.modifier = temp.modifier;
          })
          .catch((error) => {
            console.log(error);
          })
    }
  }
}
</script>

<style scoped>

</style>