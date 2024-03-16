import React from 'react';
import 'leaflet/dist/leaflet.css'
import { MapContainer,TileLayer,Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { Icon , divIcon , point} from 'leaflet';

const customIcon = new Icon({
  iconUrl:'https://cdn-icons-png.flaticon.com/128/11529/11529542.png',
  iconSize:[38,38]
})

const markers = [
  {
  geocode:[23.259933,77.412613],
  popUp:"Bhopal"
  },
  {
  geocode:[22.71792,75.8333],
  popUp:"Indore"
  },
  {
    geocode:[23.185884, 79.974380],
    popUp:"Jabalpur"
    }
    ];
const App = () => {

  return (
    <MapContainer center={[21.1290,82.7792]} zoom={13}>

      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MarkerClusterGroup>
        {markers.map((marker)=>(
          <Marker position={marker.geocode} icon={customIcon}>
          <Popup>
            {marker.popUp}
          </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
      </MapContainer>

    
  );
}

export default App;
