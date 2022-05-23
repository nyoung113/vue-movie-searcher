<template>
  <div
    class="movie-detail">
    <div class="movie-detail__poster">
      <img :src="movieDetail.Poster" />
    </div>
    <div class="movie-detail__info">
      <div class="movie-detail__info__title">
        {{ movieDetail.Title }}
      </div>
      <div><span class="info-tag">released</span> <span>{{ movieDetail.Released }}</span></div>
      <div><span class="info-tag">rated</span> <span>{{ movieDetail.Rated }}</span></div>
      <div><span class="info-tag">runtime</span> <span>{{ movieDetail.Runtime }}</span></div>
      <div><span class="info-tag">awards</span> <span>{{ movieDetail.Awards }}</span></div>
      <div class="info-plot">
        <span class=" info-tag">
          plot
        </span><div class="info-plot-content">
          {{ movieDetail.Plot }}
        </div>
      </div>
    </div>
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
            const movieDetail = await (await fetch('/.netlify/functions/details', {
              method : 'POST',
              body : JSON.stringify({id : this.$route.params.id})
            })).json();
            /*
            const movieDetail = await( await fetch(
                `https://www.omdbapi.com?apikey=7035c60c&i=${this.$route.params.id}&plot=full`
            )).json();
            */
            console.log(movieDetail);
            this.movieDetail = movieDetail;
            console.log('movie');
        }
    }
};
</script>

<style lang="scss" scoped>
    .movie-detail{
      display : flex;
      padding : 20px;
      &__poster{
        margin-right : 20px;
        img{
          border : 1px solid rgba(0, 0, 0, 0.05);
          border-radius: 10px;
        }
      }

      &__info{
        padding : 10px;
        &__title{
          font-size : 30px;
        }
        div {
          padding-bottom : 20px;
        }
      }
      .info-tag{
        padding : 2px;
        margin-right : 10px;
        color : gray; 
      }
      .info-plot-content {
        padding-top : 20px;
        line-height : 150%;
      }
    }

  @media(max-width: $breakpoint-sm) {
    .movie-detail{
      flex-direction: column;
      align-items : center;

      &__info{
        display : flex;
        flex-direction: column;
        align-items : center;
      }

      .info-plot{
        text-align: center;
        
      }
    }
  }

</style>
