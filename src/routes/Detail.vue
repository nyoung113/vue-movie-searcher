<template>
  <SearchBox />
  <MovieDetail />
</template>

<script>
import SearchBox from '~/components/SearchBox';
import MovieDetail from '~/components/MovieDetail';
export default {
    components : {
        SearchBox, MovieDetail

    }
};
</script>