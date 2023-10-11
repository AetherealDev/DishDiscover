import React, { useState } from 'react';
// import './SearchBar.css'; 

const SearchBar = () => {
  const [term, setTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call API to search or redirect to a search results page, etc.
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
