<template>
  <div class="search-box-container">
    <form>
      <input
        v-model="keyword"
        type="text" />
      <button @click.prevent="$router.push(`${keyword}`), fetchMovieList()">
        🔎
      </button>
    </form>
  </div>
</template>

<script>
export default {
    data(){
      return {
        keyword : ''
      };
    },
    methods : {
        fetchMovieList(){
            this.$store.commit('movies/toFirstPage');
            this.$store.dispatch('movies/fetchMovieList', {keyword : this.keyword});
        }
    }
};
</script>

<style scoped lang="scss">
    * {
          box-sizing: border-box;
    }
    div {
         display : flex;
         justify-content : center;
         align-items: center;
      
      form {
        width : 50%;
        height : 50px;
        display : flex;
        justify-content: center;

        input{
          height : 30px;
          flex-grow : 1;
          border : 1px solid lightgray;
          border-radius: 5px;
          
        }
        input:focus{
          outline : none;

        }
        button {
          border-radius: 5px;
          width : 30px;
          height : 30px;
          background-color : lightgray;
          border : none;
        }
        button:hover{
          cursor : pointer;
        }
      }
    }
</style>