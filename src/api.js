const axios = require("axios");

exports.getMovies = async (title) => {

    const { data } = await axios.get('http://www.omdbapi.com/?apikey=ad06d96a', {
        params: { s: title }
    }
    )
    return data.Search;

}