// HomePage.js
import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar'; 
// import RestaurantList from './RestaurantList';
import './HomePage.css'; // Assuming you have a corresponding CSS file
import RestaurantCard from '../components/RestaurantCard';
import MapSection from '../components/MapSection';

const HomePage = () => {
  // Dummy data for demonstration purposes
  const [restaurants, setRestaurants] = useState([
    { id: 'String ID 1', name: 'Restaurant 1', address: 'Address 1', rating: '4.5' },
    { id: 'String ID 2', name: 'Restaurant 2', address: 'Address 2', rating: '4.7' },
  ]);

  useEffect(() => {
   
  }, []);

  return (
    <div className="homepage">
      <SearchBar />
      <RestaurantCard restaurants={restaurants} />
      <MapSection location={location} zoomLevel={17} /> {/* include it here */}

    </div>
  );
};

export default HomePage;
