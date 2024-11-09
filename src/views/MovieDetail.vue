<template>
  <div v-if="movie" class="movie-detail">
    <h1>{{ movie.title }}</h1>
    <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" alt="movie.title" />
    <p>{{ movie.overview }}</p>
    <p>평점: {{ movie.vote_average }}</p>
    <p>개봉일: {{ movie.release_date }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      movie: null,
    };
  },
  async created() {
    const apiKey = process.env.VUE_APP_TMDB_API_KEY;
    const movieId = this.$route.params.id;
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=ko-KR`);
    this.movie = response.data;
  },
};
</script>

<style scoped>
.movie-detail img {
  width: 300px;
}
</style>