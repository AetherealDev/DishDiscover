import { useQuery } from '@apollo/client';

import FavoriteList from '../components/FavoriteList';
import FavoriteForm from '../components/FavoriteForm';

import { QUERY_FAVORITES } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_FAVORITES);
  const favorites = data?.thoughts || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <FavoriteForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <FavoriteForm
              favorites={favorites}
              title="Your favorite Dishes!"
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
