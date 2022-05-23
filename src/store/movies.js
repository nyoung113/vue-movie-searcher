export default {
    namespaced : true,
    state(){
        return {
            isFounded : false,
            keyword : '',
            page : 1,
            movielist : [],
            
        };
    },
    mutations : {
        updateKeyword(state, newKeyword){
            console.log(newKeyword.trim());
            state.keyword = newKeyword.trim();
        },
        updateMovieList(state, newMovielist){
            state.movielist = newMovielist;
        },
        toFirstPage(state){
            state.page = 1;
        },
        toNextPage(state){
            state.page += 1;
        },
        toPrevPage(state){
            state.page -= 1;
        }
    },
    getters :{


    },
    actions : {
        async fetchMovieList({ commit, state }, {keyword = ''}){
            //console.log(state.keyword);
            if(keyword && keyword !== state.keyword){
                commit('updateKeyword', keyword);
            }
            //console.log(state.keyword, state.page);
            
            /*
            const movielist =  await ( await fetch (
                `https://www.omdbapi.com?apikey=7035c60c&s=${state.keyword}&page=${state.page}`)
            ).json();
*/
            const movielist = await ( 
                await fetch ('/.netlify/functions/movies', {
                method: 'POST',
                body : JSON.stringify({keyword : state.keyword, page : state.page})
            })).json();
            console.log(movielist);

            if(movielist.Search){
                commit('updateMovieList', movielist.Search);
            }else{
                commit('updateMovieList', []);
            }
        }
    }
};