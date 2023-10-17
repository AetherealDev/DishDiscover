import { Link } from 'react-router-dom';
import UnfavoriteButton from '../UnfavoriteButton';
import { Button } from 'react-bootstrap';

const RestaurantCard = ({
    restaurants,
    title,
    showTitle=true,
}) => {
  if (!restaurants.length) {
    return <h3>No Favorites Yet</h3>;
  }

  return (
    console.log(restaurants),
    <div>
      {showTitle && <h3>{title}</h3>}
      {restaurants &&
        restaurants.map((restaurant) => (
          <div key={restaurant._id} className="card mb-3 transparent-card">
            <h4 className="bg-purple text-light">{restaurant.name}</h4>
            <div className=" p-2">
            <p>address: {restaurant.vicinity}</p>
            <p>rating: {restaurant.rating} ({restaurant.user_ratings_total} reviews) </p>
            <Button variant="primary" onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${restaurant.name}&query_place_id=${restaurant.place_id}`)}>Map</Button>
            <UnfavoriteButton restaurantId={restaurant.place_id} />
            </div>
            </div>
        ))}
    </div>
  );
};

export default RestaurantCard;


// // RestaurantList.js
// import React from 'react';
// import './RestaurantList.css'; 

// const RestaurantList = ({ restaurants }) => {
//   return (
//     <div className="restaurant-list">
//       <ul>
//         {restaurants.map((restaurant) => (
//           <li key={restaurant.id}>
//             <h3>{restaurant.name}</h3>
//             <p>{restaurant.address}</p>
//             <p>{restaurant.rating}</p>
//             {}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default RestaurantList;
