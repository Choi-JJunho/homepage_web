<template>
  <header>
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <router-link class="nav-link active" aria-current="page" to="/">홈페이지</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/meeting">Meeting</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/board">Board</router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
      <li>
        <router-link class="nav-link" to="/login">로그인</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent"
}
</script>

<style scoped>

header {
  margin-bottom: 10px;
}

h1 {
  text-align: center;
}

header ul {
  background-color: darkslategrey;
}

.nav-link {
  color: white;
}

</style>