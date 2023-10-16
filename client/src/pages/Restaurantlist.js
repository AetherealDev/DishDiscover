
import React from 'react';
import './Restaurantlist.css'; 

const Restaurantlist = ({ restaurants }) => {
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

export default Restaurantlist;
