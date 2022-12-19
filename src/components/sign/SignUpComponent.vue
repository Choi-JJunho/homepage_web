<template>
  <div class="login-container">
    <main class="text-center form-signin w-100 ms-auto me-auto">

      <form v-on:submit.prevent="signup">

        <h1 class="h3 mb-3 fw-normal">회원가입</h1>

        <div class="form-floating">
          <input type="text" class="form-control" v-model="account" required>
          <label for="account">아이디를 입력하세요</label>
        </div>

        <div class="form-floating">
          <input type="text" class="form-control" v-model="password" required>
          <label for="password">비밀번호를 입력하세요</label>
        </div>

        <!-- TODO : 비밀번호 재입력 -->

        <div class="form-floating">
          <input type="text" class="form-control" v-model="email" required>
          <label for="password">이메일을 입력하세요</label>
        </div>

        <div class="form-floating">
          <input type="text" class="form-control" v-model="name" required>
          <label for="password">이름을 입력하세요</label>
        </div>


        <div class="form-floating">
          <input type="text" class="form-control" v-model="nickname" required>
          <label for="password">별명을 입력하세요</label>
        </div>

        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"> Remember me
          </label>
        </div>
        <button class="w-100 btn btn-lg btn-primary" type="submit">회원가입</button>
        <p class="mt-5 mb-3 text-muted">© 2022 최준호의 홈페이지, 퍼가든가 말든가</p>
      </form>
    </main>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SignUpComponent",
  data() {
    return {
      account: '',
      password: '',
      email: '',
      name: '',
      nickname: '',
    }

  },
  created() {

  },
  methods: {
    signup() {
      axios.post('http://localhost:8080/signup',
          {
            account: this.account,
            password: this.password,
            email: this.email,
            name: this.name,
            nickname: this.nickname
          },
      ).then(res => {
        console.log(res)
      }).catch(error => {
        console.log(error)
        let datas = error.response.data;
        let message = 'code: ' + datas.code + '\n'
            + 'httpStatus: ' + datas.httpStatus + '\n'
            + 'message: ' + datas.message + '\n'
        alert(message);
      })
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
  height: 100vh;
}

</style>