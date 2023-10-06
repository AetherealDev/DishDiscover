import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Icon } from '@iconify/react'


const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon="typcn:location" className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
)

export default function Map(
  location = {
    address: 'VIT University, Vellore',
    lat: 10.99835602,
    lng: 77.01502627,
  },
  zoomLevel = 11,
){
    return (
      <div className="map">
        <h2 className="map-h2">Come Visit Us At Our Campus</h2>
    
        <div className="google-map">
          <GoogleMapReact
            bootstrapURLKeys={{ key: '' }}
            defaultCenter={location}
            defaultZoom={zoomLevel}
          >
            <LocationPin
              lat={location.lat}
              lng={location.lng}
              text={location.address}
            />
          </GoogleMapReact>
        </div>
      </div>
    )

}

