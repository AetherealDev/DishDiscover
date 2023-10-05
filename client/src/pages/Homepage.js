// HomePage.js
import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar'; 
import RestaurantList from './RestaurantList';
import './HomePage.css'; // Assuming you have a corresponding CSS file

const HomePage = () => {
  // Dummy data for demonstration purposes
  const [restaurants, setRestaurants] = useState([
    { id: 1, name: 'Restaurant 1', address: 'Address 1', rating: '4.5' },
    { id: 2, name: 'Restaurant 2', address: 'Address 2', rating: '4.7' },
  ]);

  useEffect(() => {
   
  }, []);

  return (
    <div className="homepage">
      <SearchBar />
      <RestaurantList restaurants={restaurants} />
    </div>
  );
};

export default HomePage;
