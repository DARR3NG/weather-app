import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './Maps.css'

const Maps = ({ lat, lon, city }) => {
  const position = [lat, lon];

  return (
    <MapContainer center={position} zoom={10} style={{ height: '200px', marginTop: '20px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>{city}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Maps;
