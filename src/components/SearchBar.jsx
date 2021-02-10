import React, { useState } from 'react';
import { navigate } from '@reach/router'

const SearchBar = () => {
    const [input, setInput] = useState('')

    const handleSearch = () => {
        navigate(`/${input}`)
    }

    return (
        <form onSubmit={handleSearch}>
            <input type='text' onChange={(e) => { setInput(e.target.value) }} value={input} />
        </form>
    );
};

export default SearchBar;