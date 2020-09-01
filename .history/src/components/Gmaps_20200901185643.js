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


const WrappedMap = withScriptjs()




const Gmaps = ({lat,lng}) => {
    console.log(lat,lng)
    return (
        <div>
            Map here
        </div>
    )
}

export default Gmaps;