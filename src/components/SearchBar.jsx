import React, { useState } from 'react';
import { navigate } from '@reach/router'
import styles from '../styles/SearchBar.module.scss'

const SearchBar = () => {
    const [input, setInput] = useState('')

    const handleSearch = () => {
        navigate(`/${input}`)
    }

    return (
        <form onSubmit={handleSearch} title='form'>
            <input className={styles.searchInput} type='text' onChange={(e) => { setInput(e.target.value) }} value={input} title='searchinput' />
        </form>
    );
};

export default SearchBar;