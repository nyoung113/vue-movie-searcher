<template>
  <div class="movie">
    <img
      :src="movie.Poster"
      class="movie__poster" />
    <div class="movie__Title">
      {{ movie.Title }}
    </div>
    <div>{{ movie.Year }} / {{ movie.Type }}</div>
  </div>
</template>

<script>
export default {
  props : ['movie']
};
</script>

<style lang="scss" scoped>
$movie-poster-width : 80%;
.movie{
  box-sizing: border-box;
  padding : 20px;
  margin : 10px;
  background-color: lightgray;
  display : flex;
  flex-direction: column;
  align-items: center;
  
  
  &__poster{
    width : $movie-poster-width;
    background-color: antiquewhite;
    height : calc($movie-poster-width * 1.3);  
  }

  &:hover{
    cursor : pointer;
  }
}
</style>