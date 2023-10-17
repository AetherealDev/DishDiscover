import React, { useState, useEffect } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const MapWithMarkers = withScriptjs(
  withGoogleMap(({ markers }) => (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: 39.983334, lng: -82.973330 }} // Default center (Columbus)
    >
      {markers.map((marker, index) => (
        <Marker
          key={index}
          position={{ lat: marker.lat, lng: marker.lng }}
          title={marker.title}
        />
      ))}
    </GoogleMap>
  ))
);

const MapContainer = () => {
  // Example data, replace with marker data
  const [markers, setMarkers] = useState([
    { lat: 39.983334, lng: -82.973330, title: 'Marker 1' },
    { lat: 37.7749, lng: -122.4294, title: 'Marker 2' },
    // Add more markers as needed
  ]);

  return (
    <MapWithMarkers
      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBjVENG2N3Pkgwg-R90W7f39F1p8ZGlFMQ&v=3.exp&libraries=geometry,drawing,places`}
      loadingElement={<div style={{ height: '100%' }} />}
      containerElement={<div style={{ height: '400px' }} />}
      mapElement={<div style={{ height: '100%' }} />}
      markers={markers}
    />
  );
};

export default MapContainer;
