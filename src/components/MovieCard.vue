<template>
  <div class="movie-card">
    <img
        :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
        :alt="movie.title"
        class="movie-poster"
    />
    <h2 class="movie-title">{{ movie.title }}</h2>
    <p class="movie-overview">{{ movie.overview }}</p>
    <p class="movie-rating">평점: {{ movie.vote_average }}</p>
    <p class="movie-release-date">개봉일: {{ movie.release_date }}</p>
    <p class="movie-genres">
      장르:
      <span v-for="genre in movie.genre_ids" :key="genre">{{ getGenreName(genre) }}</span>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    movie: Object,
  },
  methods: {
    getGenreName(genreId) {
      const genreMap = {
        28: '액션',
        12: '모험',
        16: '애니메이션',
        // 추가적인 장르 매핑
      };
      return genreMap[genreId] || '기타';
    },
  },
};
</script>

<style scoped>
.movie-card {
  width: 200px;
}

.movie-poster {
  width: 100%;
}

.movie-title {
  font-size: 18px;
}

.movie-overview {
  font-size: 14px;
}

.movie-rating,
.movie-release-date,
.movie-genres {
  font-size: 12px;
}
</style>