import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Icon } from '@iconify/react'


const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon="typcn:location" className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
)

export default function Map()
{
  const defaultProps = {
    center: {
      lat: 39.9610877,
      lng: -82.9978041
    },
    zoom: 12
  }; 



    return (
      <div className="map">
        <h2 className="map-h2">Come Visit Us At Our RESTAURANT</h2>
    
        <div className="google-map" style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyBjVENG2N3Pkgwg-R90W7f39F1p8ZGlFMQ' }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
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

