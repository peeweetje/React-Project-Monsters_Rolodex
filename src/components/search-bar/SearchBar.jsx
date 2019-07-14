import './search-bar.css';

import React from 'react';

const SearchBar = ({placeholder, handleChange}) => (
    <input className="search" type="search" placeholder={placeholder}
    onChange={handleChange}/>
)

export default SearchBar;