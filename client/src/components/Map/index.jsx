import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

import './map.css'

const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 39.983334,
  lng: -82.973330,
}


const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon="typcn:location" className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
)

export default function Map( {location, zoomLevel} )
{
  const defaultProps = {
    center: {
      lat: 39.983334,
      lng: -82.983330
    },
    zoom: 13
  }; 

    return (
      <div className="map mt-4 mb-5">
    
        <div className="google-map" style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyBjVENG2N3Pkgwg-R90W7f39F1p8ZGlFMQ" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <LocationPin
              lat={defaultProps.center.lat}
              lng={defaultProps.center.lng}
              text={location.address}
            />
          </GoogleMapReact>
        </div>
      </div>
    )

}

