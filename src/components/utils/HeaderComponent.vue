<template>
  <header class="p-3 text-bg-dark mb-3">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <i class="bi bi-house"></i>
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li class="nav-item">
            <router-link class="nav-link px-2" aria-current="page" to="/">홈페이지</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link px-2" to="/board">게시판</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link px-2" to="/playground">놀이터</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link px-2" to="/about">About</router-link>
          </li>

        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="검색어를 입력하세요"
                 aria-label="Search">
        </form>

        <div class="text-end">
          <router-link class="btn btn-outline-light me-2" to="/signin">로그인</router-link>
          <router-link class="btn btn-warning" to="/signup">회원가입</router-link>
        </div>
      </div>
    </div>

  </header>
</template>

<script>

export default {
  name: "HeaderComponent"
}
</script>

<style scoped>

.nav-item a {
  color: white;
}

.router-link-active {
  border-bottom: 3px solid #f30765;
}
</style>