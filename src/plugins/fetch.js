/* eslint-disable */ 

const API_URL = 'https://www.omdbapi.com?apikey=7035c60c&s=frozen&page=3';



export default {
    install : (app, options) => {
        // 플러그인
        app.config.globalProperties.$fetch = (url, opts) => {
            return fetch(url, opts).then(res=>res.json());
        };
    }
};