// RestaurantList.js
import React from 'react';
import './RestaurantList.css'; 

const RestaurantList = ({ restaurants }) => {
  return (
    <div className="restaurant-list">
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <h3>{restaurant.name}</h3>
            <p>{restaurant.address}</p>
            <p>{restaurant.rating}</p>
            {}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantList;
