import React, { useState } from 'react';
import Rating from '@material-ui/lab/Rating';
import styles from '../styles/StarRating.module.scss';
import { addMyMovie } from '../api';

const StarRating = ({ Title, Year, Poster, imdbID }) => {
    const [value, setValue] = useState(0)

    const handleChange = (newRating) => {
        setValue(newRating)
        addMyMovie(Title, Year, Poster, imdbID, newRating)
    }
    return (
        <div className={styles.container}>
            <Rating
                title='rating'
                value={value}
                onChange={(event, newValue) => { handleChange(newValue) }}
            />
        </div>
    );
};

export default StarRating;