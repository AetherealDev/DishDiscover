import SearchBar from '../components/Search';
// import MapSection from '../components/Map';
import MapContainer from '../components/Map';

const Home = () => {
  return (
    <div className="homepage">
       <SearchBar />
      {/* <MapContainer location={location} defaultZoom={4} /> */}
    </div>
  );
};

export default Home;