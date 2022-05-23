<template>
  <div class="movie">
    <img
      :src="movie.Poster"
      class="movie__poster" />
    <div class="movie__title">
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
.movie{
  box-sizing: border-box;
  display : flex;
  background-color : white;
  flex-direction: column;
  align-items: center;
  font-size : 15px;
  text-align : center;
  padding : 20px;
  
  
  &__poster{
    width : 80%;
    height : calc(80% * 1.3);
    background-color: antiquewhite;  
    border : 1px solid rgba(0, 0, 0, 0.05);
    border-radius: 8px;
  }

  &:hover{
    cursor : pointer;
  }

  &__title{
    padding : 10px;
  }

}
</style>