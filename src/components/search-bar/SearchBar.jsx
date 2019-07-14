import './search-bar.css';

import React from 'react';

const SearchBar = ({placeholder, handleChange, className}) => (
    <input className={className} type="search" placeholder={placeholder}
    onChange={handleChange}/>
)

export default SearchBar;