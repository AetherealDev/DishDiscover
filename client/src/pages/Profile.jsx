import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';
import RestaurantCard from '../components/RestaurantCard';

const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_ME : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.email) {
    return (
      <h4>
        Viewing {`${user.email}'s`} profile.
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  return (
    <>
    <div className='d-flex'>
      <div className="flex-row justify-center mb-3 my-auto mx-auto" >
        <div className="col-12 col-md-10 mb-5">
          <RestaurantCard
            restaurants={user.savedRestaurants}
            title={`${user.email}'s favorites...`}
            showUsername={false}
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default Profile;
