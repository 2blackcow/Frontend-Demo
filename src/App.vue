<template>
  <div id="app">
    <!-- 네비게이션 바 -->
    <header>
      <nav>
        <ul>
          <li><router-link to="/">홈</router-link></li>
          <li><router-link to="/popular">대세 콘텐츠</router-link></li>
          <li><router-link to="/search">찾아보기</router-link></li>
          <li><router-link to="/wishlist">내가 찜한 리스트</router-link></li>
        </ul>
        <div class="user-icon">
          <router-link to="/signin">
            <i class="fas fa-user"></i>
          </router-link>
        </div>
      </nav>
    </header>

    <!-- 메인 콘텐츠 -->
    <main>
      <router-view />
    </main>

    <!-- 푸터 (필요 시 추가) -->
    <footer>
      <p>&copy; 2024 Movie Demo</p>
    </footer>
  </div>
</template>

<script lang="ts">
export default {
  name: 'App',
};
</script>

<style scoped>
/* 기본 레이아웃 스타일 */
#app {
  font-family: Arial, sans-serif;
  color: #fff;
  background-color: #181818;
}

header {
  background-color: #333;
  padding: 10px;
}

nav ul {
  list-style-type: none;
  padding: 0;
}

nav ul li {
  display: inline;
  margin-right: 20px;
}

nav ul li a {
  color: white;
  text-decoration: none;
}

.user-icon {
  float: right;
}

footer {
  text-align: center;
  padding: 20px;
}
</style>