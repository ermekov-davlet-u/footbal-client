import { TileLayer } from 'react-leaflet'
import { MapContainer, Marker, Popup } from 'react-leaflet'
// import { useMap } from 'react-leaflet'
function Map() {
  return ( 
    <>
    <MapContainer className='map' center={[42.87472, 74.61222]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[42.8504, 74.70307]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker> 
    </MapContainer>
    </>
   );
}

export default Map;