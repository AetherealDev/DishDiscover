import React from 'react';
import Navigation from './Navigation';
import SearchBar from './SearchBar';
import './Header.css';

const Header = () => {
  return (
    <header className="app-header">
      <h1>Your Restaurant Finder</h1>
      <Navigation />
      <SearchBar />
    </header>
  );
};

export default Header;
