<template>
  <div class="home">
    <h1>인기 영화</h1>
    <div class="movie-list">
      <div v-for="movie in movies" :key="movie.id" class="movie-card">
        <router-link :to="'/movie/' + movie.id">
          <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" alt="movie.title" />
        </router-link>
        <h2>{{ movie.title }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      movies: [],
    };
  },
  async created() {
    const apiKey = process.env.VUE_APP_TMDB_API_KEY;
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ko-KR&page=1`);
    this.movies = response.data.results;
  },
};
</script>

<style scoped>
.movie-list {
  display: flex;
  flex-wrap: wrap;
}
.movie-card {
  width: 200px;
  margin: 10px;
}
.movie-card img {
  width: 100%;
}
</style>