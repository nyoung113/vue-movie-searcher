<template>
  <div class="search-box-container">
    <form>
      <input
        v-model="keyword"
        placeholder="search with keyword"
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
    .search-box-container {
        height : 100px;
        display : flex;
        justify-content : center;
        align-items: center;
        background-color : white;
        border-bottom: $border;
      form {
        width : 50%;
        max-width : 600px;
        display : flex;
        justify-content: center;
        align-items: center;

        input{
          height : 40px;
          border : $border;
          border-radius: 20px;
          padding-left : 20px;
          flex-grow : 1;
          
        }
        input:focus{
          outline : none;
        }
        button {
          width : 40px;
          height : 40px;
          background-color : lightgray;
          border : none;
          margin-left: 10px;
          border-radius: 20px;
        }
        button:hover{
          cursor : pointer;
        }
      }
    }
</style>