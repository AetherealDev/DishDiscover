import { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { QUERY_RESTAURANTS } from '../../utils/queries';
import { useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';

const SearchBar = () => {
  const [term, setTerm] = useState('');
  const [getRestaurants, { loading, error, data }] = useLazyQuery(QUERY_RESTAURANTS);

  const handleSubmit = async (e) => {
    e.preventDefault();
    getRestaurants({ variables: { term: term } });
  };

  // Log the restaurant data when it changes
  useEffect(() => {
    if (data) {
      console.log(data.restaurants);
    }
  }, [data]);

  return (
    <div>
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
      <div className="card-container">
        {data && data.searchRestaurants.map((restaurant) => (
          <Card key={restaurant.place_id} style={{ width: '18rem', display: 'inline-block' }}>
            <Card.Body>
              <Card.Title>{restaurant.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{restaurant.vicinity}</Card.Subtitle>
              <Card.Text>
                Rating: {restaurant.rating} ({restaurant.user_ratings_total} reviews)
              </Card.Text>
              <Button variant="primary">More Details</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
