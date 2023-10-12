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
    <div className='mt-5 pt-5'>
      <h1>Search Restaurants</h1>
      <form className="form-inline" onSubmit={handleSubmit}>
        <div className='form-group mx-sm-3 mb-2'>
        <input
          type="text"
          className="form-control"
          value={term}
          onChange={e => setTerm(e.target.value)}
          placeholder="Search restaurants..."
        />
        </div>
        <button type="submit" className='btn btn-primary mb-2'>Search</button>
      </form>
      <div className="card-container">
        {loading && <div>Loading...</div>}
        {error && <div>Error! {error.message}</div>}
        {data && !data.searchRestaurants.length && <div>No results found!</div>}

        {/* if restraunt data exists */}
        {data && data.searchRestaurants.length && <div>Results: {data.searchRestaurants.length}</div>}

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
