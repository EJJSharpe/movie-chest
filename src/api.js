import { API, graphqlOperation } from 'aws-amplify';
import { createFilm } from './graphql/mutations';
import { listFilms } from './graphql/queries';
import axios from 'axios';
import { Auth } from 'aws-amplify';


//requesting omdb api functions
export const getMovies = async (title) => {
    try {
        const { data } = await axios.get('https://www.omdbapi.com/?apikey=ad06d96a', {
            params: { s: title }
        })
        return data.Search;
    } catch (err) {
        console.log(err)
    }
}

export const getMovieByID = async (id) => {
    try {
        const { data } = await axios.get('https://www.omdbapi.com/?apikey=ad06d96a', {
            params: { i: id }
        })
        return data;
    } catch (err) {
        console.log(err)
    }
}



//requesting dynamo db datastore functions
export const fetchMyMovies = async () => {
    try {
        const { data } = await API.graphql(graphqlOperation(listFilms))
        const movieList = data.listFilms.items;
        console.log(movieList)
        return movieList;
    } catch (err) {
        console.log(err)
    }
}

export const addMyMovie = async (title, year, poster, imdbID, rating) => {
    try {
        const userdata = await Auth.currentUserInfo()
        const username = userdata.username
        const { data } = await API.graphql(graphqlOperation(createFilm, {
            input:
            {
                title,
                imdbID,
                year,
                poster,
                rating,
                owner: username,
            }
        }))
        const movieList = data.createFilm.items;
        return movieList;
    }
    catch (err) {
        console.log(err)
    }

}