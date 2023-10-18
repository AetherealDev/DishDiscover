import './locationpin.css'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

const LocationPin = ({ lat, lon, address }) => (
    lat = lat || 39.983334,
    lon = lon || -82.983330,
    address = address || '1600 Amphitheatre Parkway, Mountain View, california.',
  )

return (
    <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
    <p className="pin-text">{address}</p>
  </div>

)

export default LocationPin;