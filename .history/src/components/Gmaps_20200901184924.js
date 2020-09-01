import React, {useEffect} from 'react';
import { GoogleMap } from "react-google-maps";






function Map() {
  return <GoogleMap defaultZoom={10} defaultCenter={{}} />;
}




const Gmaps = ({lat,lng}) => {
    console.log(lat.lng)
    return (
        <div>
            Map here
        </div>
    )
}

export default Gmaps;