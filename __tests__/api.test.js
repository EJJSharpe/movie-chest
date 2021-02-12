import { getMovies, getMovieByID, fetchMyMovies, addMyMovie } from '../src/api';

describe('getMovies', () => {
    test('returns an array of movies with correct properties', async () => {
        const response = await getMovies('Lion King')
        const firstResult = Object.keys(response[0])
        expect(firstResult).toEqual(expect.arrayContaining([
            'Title', 'Year', 'Type', 'imdbID', 'Poster'
        ]))
    })
});

describe('getMovieByID', () => {
    test('returns a movie with correct properties', async () => {
        const response = await getMovieByID('tt3896198')
        expect(response).toEqual(expect.objectContaining({
            Title: expect.any(String),
            Year: expect.any(String),
            Type: expect.any(String),
            imdbID: expect.any(String),
            Poster: expect.any(String)
        }))
    })

    test('correct movie is served', async () => {
        const response = await getMovieByID('tt3896198')
        expect(response.imdbID).toBe('tt3896198')
    });
});


// unsure how to test these functions as they require authentication to test them
describe('fetchMyMovies', () => {
});

describe('addMyMovie', () => {

});