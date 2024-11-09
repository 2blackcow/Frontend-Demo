<template>
  <div class="movie-list">
    <h1>인기 영화 목록</h1>
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="movies.length === 0" class="loading">영화를 불러오는 중...</div>
    <div class="movies">
      <div v-for="movie in movies" :key="movie.id" class="movie-card">
        <img :src="getPosterUrl(movie.poster_path)" alt="영화 포스터" class="movie-poster" />
        <div class="movie-info">
          <h2>{{ movie.title }}</h2>
          <p>{{ movie.overview }}</p>
          <p><strong>평점:</strong> {{ movie.vote_average }} / 10</p>
          <p><strong>개봉일:</strong> {{ movie.release_date }}</p>
          <p><strong>장르:</strong> {{ getGenres(movie.genre_ids) }}</p>
        </div>
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
      genres: {},
      error: null,
    };
  },
  methods: {
    async fetchMovies() {
      try {
        const response = await axios.get(
            `${process.env.VUE_APP_TMDB_BASE_URL}/movie/popular`,
            {
              params: {
                api_key: process.env.VUE_APP_TMDB_API_KEY,
                language: 'ko-KR',
                page: 1,
              },
            }
        );
        this.movies = response.data.results;
      } catch (error) {
        this.error = '영화를 불러오는 중 오류가 발생했습니다.';
        console.error(error);
      }
    },
    async fetchGenres() {
      try {
        const response = await axios.get(
            `${process.env.VUE_APP_TMDB_BASE_URL}/genre/movie/list`,
            {
              params: {
                api_key: process.env.VUE_APP_TMDB_API_KEY,
                language: 'ko-KR',
              },
            }
        );
        response.data.genres.forEach((genre) => {
          this.genres[genre.id] = genre.name;
        });
      } catch (error) {
        this.error = '장르 정보를 불러오는 중 오류가 발생했습니다.';
        console.error(error);
      }
    },
    getPosterUrl(path) {
      return `https://image.tmdb.org/t/p/w500${path}`;
    },
    getGenres(genreIds) {
      return genreIds.map((id) => this.genres[id]).join(', ');
    },
  },
  async created() {
    await this.fetchGenres();
    await this.fetchMovies();
  },
};
</script>

<style scoped>
.movie-list {
  padding: 20px;
}
.movies {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.movie-card {
  width: 200px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.movie-poster {
  width: 100%;
  height: auto;
}
.movie-info {
  padding: 10px;
}
.loading {
  font-size: 18px;
  color: #333;
}
.error {
  color: red;
}
</style>
