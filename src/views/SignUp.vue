<template>
  <div class="signup">
    <h1>회원가입</h1>
    <input v-model="email" type="email" placeholder="이메일" />
    <input v-model="password" type="password" placeholder="비밀번호" />
    <input v-model="confirmPassword" type="password" placeholder="비밀번호 확인" />
    <button @click="signUp">회원가입</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: ''
    };
  },
  methods: {
    signUp() {
      if (this.password === this.confirmPassword) {
        localStorage.setItem('email', this.email);
        localStorage.setItem('password', this.password);
        alert('회원가입 성공!');
        this.$router.push('/signin');
      } else {
        alert('비밀번호가 일치하지 않습니다.');
      }
    }
  }
};
</script>

<style scoped>
.signup input {
  display: block;
}
</style>