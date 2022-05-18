<template>
  <SearchBox />
  <MovieList />
</template>

<script>
import SearchBox from '~/components/SearchBox';
import MovieList from '~/components/MovieList';
export default {

    components : {
      SearchBox, MovieList
    },
    data(){

    }
};
</script>