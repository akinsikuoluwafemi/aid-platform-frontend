import React, {useEffect} from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";






function Map() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 9.081999, lng: 8.675277 }}
    />
  );
}


const WrappedMap = withScriptjs(withGoogleMap(Map))




const Gmaps = ({lat,lng}) => {
    console.log(lat,lng)
    return (
      <div>
        <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBniFhD5gyPyOrEm212cVIAYVythPk2JcE`}
        
            />
      </div>
    );
}

export default Gmaps;