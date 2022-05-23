<template>
  <div class="list-containter">
    <div
      v-if="!Boolean(movieList.length)">
      검색 결과가 없습니다
    </div>
    <button
      v-if="page > 1"
      class="page-button"
      @click="fetchToPrevPage">
      ◀️
    </button>
    <div class="movie-list">
      <Movie
        v-for="movie in movieList"
        :key="movie.imdbID"
        :movie="movie"
        @click="$router.push(`/${keyword}/${movie.imdbID}`)" />
    </div>
    <button
      v-if="Boolean(movieList.length)"
      class="page-button"
      @click="fetchToNextPage">
      ▶️
    </button>
  </div>
</template>

<script>
import Movie from './Movie';
export default {
    components : {
      Movie
    },
    computed : {
      page(){
        return this.$store.state.movies.page;
      },
      movieList(){
        return this.$store.state.movies.movielist;
      },
      keyword(){
        return this.$store.state.movies.keyword;
      }
    },
    watch: {
      '$route' (to, from) {
        console.log(to.params);
        this.$store.dispatch('movies/fetchMovieList', {keyword : to.params.keyword});
      }
    },
  created() { // 현재 api 중복됨 => 새로고침시만 확인
    console.log(this.$route.params.keyword);
    this.$store.dispatch('movies/fetchMovieList', {keyword : this.$route.params.keyword});
  },
    methods : {
        
        fetchToPrevPage(){
            this.$store.commit('movies/toPrevPage');
            this.$store.dispatch('movies/fetchMovieList', {});
        },
        fetchToNextPage(){
            this.$store.commit('movies/toNextPage');
            this.$store.dispatch('movies/fetchMovieList', {});
        },
    }
};
</script>

<style scoped lang="scss">
  .list-containter{
    height : 100%;
    display : flex;
    justify-content: center;
    align-items: center;
  }

  .movie-list{
    list-style : none;
    display : grid;
    grid-template-columns : repeat(5, 1fr);
  }

  
  .page-button{
    border : none;
    height : 500px;
    width : 40px;
    &:hover{
      cursor : pointer;
    }
  }

    @media(max-width: $breakpoint-md) {
      .movie-list{
      grid-template-columns : repeat(4, 1fr);
    }
  }

  @media(max-width: $breakpoint-sm) {
      .movie-list{

    grid-template-columns : repeat(2, 1fr);
    }
  }

</style>