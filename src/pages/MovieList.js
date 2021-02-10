import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar'
import { getMovies } from '../api'
import styles from '../styles/MovieList.module.scss'

const MovieList = ({ searchTerm }) => {

    const [movies, setMovies] = useState([])


    useEffect(() => {
        const loadContent = async () => {
            const loadedFilms = await getMovies(searchTerm || 'star wars')
            setMovies(loadedFilms)
        }
        loadContent()
    })

    return (
        <div>
            <h1>Movies</h1>
            <SearchBar />
            <div className={styles.container}>
                {movies.map(({ Title, Year, Poster }) => {
                    return (
                        <div className={styles.movieCard}>
                            <h3>{Title}</h3>
                            <p>{Year}</p>
                            <img src={Poster} alt={`poster for ${Title}`} />
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default MovieList;