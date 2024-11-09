<template>
  <div class="wishlist">
    <h1>내가 찜한 영화 리스트</h1>
    <ul v-if="wishlist.length > 0">
      <li v-for="movie in wishlist" :key="movie.id">{{ movie.title }}</li>
    </ul>
    <p v-else>찜한 영화가 없습니다.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      wishlist: []
    };
  },
  created() {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    this.wishlist = storedWishlist;
  }
};
</script>

<style scoped></style>