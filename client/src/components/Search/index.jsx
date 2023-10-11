import React, { useState } from 'react';
// import './SearchBar.css'; 

import {getNearbyRestaurants} from '../../utils/API.js';

const SearchBar = () => {
  const [term, setTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    getNearbyRestaurants();
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        style={{display: 'inline-block'}}
        type="text"
        className="form-control"
        value={term}
        onChange={e => setTerm(e.target.value)}
        placeholder="Search restaurants..."
      />
      <button style={{display: 'inline-block'}} type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
