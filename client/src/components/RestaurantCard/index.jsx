import { Link } from 'react-router-dom';

const RestaurantCard = ({
    restaurants,
}) => {
  if (!restaurants.length) {
    return <h3>No Favorites Yet</h3>;
  }

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {restaurants &&
        restaurants.map((restaurant) => (
          <div key={restaurant._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
            </h4>
            <div className="card-body bg-light p-2">
            <p>{restaurant.address}</p>
            <p>{restaurant.rating}</p>
            </div>
            {   
                restaurant.url ? (
            
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`${restaurant._url}`}
            >
              Find out more about this restaurant!
            </Link> ) : (<></>)}
          </div>
        ))}
    </div>
  );
};

export default RestaurantCard;


