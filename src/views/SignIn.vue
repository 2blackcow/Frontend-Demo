<template>
  <div class="signin">
    <h1>로그인</h1>
    <input v-model="email" type="email" placeholder="이메일" />
    <input v-model="password" type="password" placeholder="비밀번호" />
    <button @click="signIn">로그인</button>
    <router-link to="/signup">회원가입</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    signIn() {
      const storedEmail = localStorage.getItem('email');
      const storedPassword = localStorage.getItem('password');

      if (this.email === storedEmail && this.password === storedPassword) {
        alert('로그인 성공!');
        this.$router.push('/');
      } else {
        alert('로그인 실패. 이메일 또는 비밀번호가 틀렸습니다.');
      }
    }
  }
};
</script>

<style scoped>
.signin input {
  display: block;
}
</style>