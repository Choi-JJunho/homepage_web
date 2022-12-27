<template>
  <div class="login-container">
    <main class="text-center form-signin w-100 m-auto">
      <form v-on:submit.prevent="signin">
        <a href="/public"><img src="@/assets/image/logo.png" alt=""></a>
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
        <div class="form-floating">
          <input type="text" class="form-control" id="account" v-model="account">
          <label for="account">아이디를 입력하세요</label>
        </div>
        <div class="form-floating">
          <input type="password" class="form-control" id="pwd" v-model="password">
          <label for="pwd">비밀번호를 입력하세요</label>
        </div>

        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"> 자동로그인
          </label>
        </div>
        <button class="w-100 btn btn-lg btn-primary" type="submit">로그인</button>
        <a href="/signup" class="mt-3 w-100 btn btn-lg btn-secondary" type="submit">회원가입</a>

        <p class="mt-5 mb-3 text-muted">© 2022 최준호의 홈페이지, 퍼가든가 말든가</p>
      </form>
    </main>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SignInComponent",
  data() {
    return {
      account: '',
      password: ''
    }
  },
  created() {

  },
  methods: {
    signin() {
      axios.post('http://localhost:8080/signin',
          {
            account: this.account,
            password: this.password
          },
      ).then(res => {
        console.log(res.data)
        sessionStorage.setItem('accessToken', 'Bearer ' + res.data.accessToken)
        localStorage.setItem('refreshToken', res.data.refreshToken)
        location.replace('/');
      }).catch(error => {
        console.log(error.response.data);
      });
    }
  }
}
</script>

<style scoped>
.form-signin {
  max-width: 330px;
  padding: 15px;
}

.text-center {
  text-align: center !important;
}

.login-container {
  display: flex;
  align-items: center;
  height: 100vh;
}

</style>