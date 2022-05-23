const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

exports.handler = async function (event){
    const {id} = JSON.parse(event.body);
    const res = await axios({
        url : `https://www.omdbapi.com?apikey=${process.env.API_KEY}&i=${id}&plot=full`
    });
    return {
        statusCode : 200,
        body : JSON.stringify(res.data)
    }
}