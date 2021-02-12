import React, { useState, useEffect } from 'react';
import styles from '../styles/MyMovies.module.scss'
import Rating from '@material-ui/lab/Rating';
import { fetchMyMovies } from '../api'

const MyMovies = () => {

    const [myFilms, setMyFilms] = useState([])

    useEffect(() => {
        const loadContent = async () => {
            const films = await fetchMyMovies();
            setMyFilms(films)
        }
        loadContent()
    }, [])

    return (
        myFilms.length !== 0 ?
            <>
                <h1>My Movies</h1>
                <div className={styles.container}>
                    {myFilms.map(({ poster, title, year, rating }) => {
                        return (
                            <div className={styles.movieCard}>
                                <img src={poster} alt={`poster for ${title}`} />
                                <Rating readOnly className={styles.starRating} value={rating} />
                                <h3>{title}</h3>
                                <p>{year}</p>
                            </div>
                        )
                    })}

                </div>
            </> :
            <div>
                <h1>My Movies</h1>
                <h2>You dont have any films yet. Rate a film to add them to your movie chest.</h2>
            </div>
    );
};

export default MyMovies;