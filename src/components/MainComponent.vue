<template>
  <div class="main-contents">

    <main class="container">
      <div class="p-4 p-md-5 mb-4 rounded text-bg-dark row g-0">
        <div class="col-md-6 px-0">
          <h1 class="display-4 fst-italic fs-4">
            어서오세요<br>
            <span class="fs-1 fw-bold">최준호의 블로그입니다.</span>
          </h1>
          <p class="lead my-3">blaa blaa</p>
          <p class="lead mb-0"><a href="#" class="text-white fw-bold">최준호...?</a></p>
        </div>

        <div class="col-md-6">
          <img src="@/assets/image/logo.png" alt="main_logo">
        </div>

      </div>

      <div class="row g-5">
        <div class="col-md-8">
          <h3 class="pb-4 mb-4 fst-italic border-bottom">게시물 목록 </h3>

          <article class="blog-post" v-for="article in articles" :key="article">

            <a :href="'/article/'+article.id" class="blog-post-title">
              <h2 class="mb-1">{{ article.title }}</h2>
            </a>


            <p class="blog-post-meta">{{ new Date(article.createDate).toDateString() }} / {{ article.creator.name }}</p>
            <p class="blog-post-description">{{ article.description }}</p>
            <hr>

          </article>

          <!-- Pagination -->
          <nav>
            <ul class="pagination justify-content-center">
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>

              <li class="page-item" v-for="index in totalPages" :key="index">
                <a class="page-link" href="#" @click.prevent="paging(index - 1)">{{ index }}</a>
              </li>

              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>

        </div>
        <div class="col-md-4">
          <div class="position-sticky" style="top: 2rem;">
            <div class="p-4 mb-3 bg-light rounded">
              <h4 class="fst-italic">About</h4>
              <p class="mb-0">최준호의 기록블로그입니다.<br>Vue.Js로 개발을 진행중이며 모자란부분이 많습니다.</p>
            </div>

            <div class="p-4">
              <h4 class="fst-italic">Categories</h4>
              <ol class="list-unstyled mb-0">
                <li><a href="#">대충 카테고리가 들어감</a></li>
                <li><a href="#">April 2020</a></li>
              </ol>
            </div>

            <div class="p-4">
              <h4 class="fst-italic">INFO</h4>
              <ol class="list-unstyled">
                <li class="ms-3">
                  <a class="text-muted" href="https://github.com/Choi-JJunho">
                    <i class="bi-github"></i> GitHub
                  </a>
                </li>
                <li class="ms-3">
                  <a class="text-muted" href="https://www.instagram.com/mr_jjune/">
                    <i class="bi-instagram"></i> Instagram
                  </a>
                </li>
                <li class="ms-3">
                  <a class="text-muted" href="https://www.facebook.com/profile.php?id=100010011462344">
                    <i class="bi-facebook"></i> Facebook
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

    </main>
  </div>
</template>

<script>

export default {

  name: "MainComponent",
  data() {
    return {
      boards: [],
      articles: [],
      searchQuery: "",

      page: 0,
      totalPages: 0,
      totalElements: 0
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.axios.get('http://localhost:8080/article/list',
          {
            params: {
              keyword: this.searchQuery,
              page: this.page
            }
          }
      )
          .then((res) => {
            this.articles = res.data.content;
            this.totalElements = res.data.totalElements;
            this.totalPages = res.data.totalPages;
          })
          .catch((error) => {
            console.log(error);
          })
      this.axios.get('http://localhost:8080/board/list')
          .then((res) => {
            this.boards = res.data;
          })
          .catch((error) => {
            console.log(error);
          })
    },
    paging(page) {
      this.page = page;
      this.fetchData();
      console.log(this.page);
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

.blog-post-title {
  color: black;
  text-decoration: none;
}

.blog-post-description {
  /* 한 줄 자르기 */
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 500px;
  margin: auto;

  /* 여러 줄 자르기 추가 스타일 */
  white-space: normal;
  line-height: 1.2;
  height: 2.4em;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

</style>