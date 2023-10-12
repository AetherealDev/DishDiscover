import { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { QUERY_RESTAURANTS } from '../../utils/queries';
import { useEffect } from 'react';

const SearchBar = () => {
  const [term, setTerm] = useState('');
  const [getRestaurants, { loading, error, data }] = useLazyQuery(QUERY_RESTAURANTS);

  const handleSubmit = async (e) => {
    e.preventDefault();
    getRestaurants({ variables: { location: term } });
  };

  // Log the restaurant data when it changes
  useEffect(() => {
    if (data) {
      console.log(data.restaurants);
    }
  }, [data]);

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
