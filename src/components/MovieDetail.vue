<template>
  <div class="movie-detail">
    <div class="movie-detail__poster">
      <img :src="movieDetail.Poster" />
    </div>
    <div>{{ movieDetail.Title }}</div>
    <div>
      <span>{{ movieDetail.Released }} / </span>
      <span>{{ movieDetail.Rated }} / </span>
      <span>{{ movieDetail.Runtime }}</span>
    </div>
    <div>{{ movieDetail.Awards }}</div>
    <div>{{ movieDetail.Plot }}</div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            movieDetail : {}
        };
    },
    computed(){

    },
    created(){
        this.fetchMovieDetail();
    },
    methods : {
        async fetchMovieDetail(){
            const movieDetail = await( await fetch(
                `https://www.omdbapi.com?apikey=7035c60c&i=${this.$route.params.id}&plot=full`
            )).json();
            console.log(movieDetail);
            this.movieDetail = movieDetail;
            console.log('movie');
        }
    }
};
</script>

<style lang="scss" scoped>
    

</style>
