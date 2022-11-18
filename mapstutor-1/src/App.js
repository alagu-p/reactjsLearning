import * as React from 'react';
import {render} from 'react-dom';
import Map, {Marker} from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';
const MAPBOX_TOKEN = 'pk.eyJ1Ijoiam9objM3OSIsImEiOiJjbGFnbGRlZ2owMThjM3FtcHl1cW83NHU5In0.ftXft95B3h_Dq4UcLa20Vw '; 

function App() {
  return (
    <Map
    initialViewState={{
      latitude: 37.8,
      longitude: -122.4,
      zoom: 5
    }}
    style={{ width: 1500, height: 750}}
    mapStyle="mapbox://styles/mapbox/dark-v10"
    mapboxAccessToken={MAPBOX_TOKEN}
  >
    <Marker longitude={-122.4} latitude={37.8} color="red" />
  </Map>
  );
}

export default App;
