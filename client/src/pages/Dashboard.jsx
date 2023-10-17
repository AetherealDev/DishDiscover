// Dashboard.jsx
import SearchBar from '../components/Search';
import MapSection from '../components/Map';

const Home = () => {
   return (
    <div className="homepage">
      <SearchBar />
      {/* <RestaurantCard restaurants={restaurants} /> */}
      <MapSection location={location} defaultZoom={4} />

    </div>
  );
};

export default Home;