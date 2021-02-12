import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar'
import { getMovies } from '../api'
import styles from '../styles/MovieList.module.scss'
import StarRating from '../components/StarRating';

const MovieList = ({ searchTerm }) => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        const loadContent = async () => {
            const loadedFilms = await getMovies(searchTerm || 'back to the future')
            setMovies(loadedFilms)
        }
        loadContent()
    }, [searchTerm])

    return (
        <div className={styles.outerContainer}>
            <div className={styles.textContainer}>
                <h1>Movie Chest</h1>
                <p>Keep a track of the movies that you like! Search for a movie below and then rate them to add them to your movie chest.</p>
            </div>
            <SearchBar />
            <div className={styles.container}>
                {movies.map(({ Title, Year, Poster, imdbID }) => {
                    return (
                        <div className={styles.movieCard}>
                            <img src={Poster} alt={`poster for ${Title}`} />
                            <StarRating className={styles.starRating} Title={Title} Year={Year} Poster={Poster} imdbID={imdbID} />
                            <h3>{Title}</h3>
                            <p>{Year}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default MovieList;