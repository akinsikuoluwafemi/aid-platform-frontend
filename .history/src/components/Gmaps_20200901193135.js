import React, {useEffect, useState, useContext} from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import { LatitudeContext } from '../LocationContext';





function Map() {
 

    console.log(LatitudeContext)

    const {userLat} = useContext(LatitudeContext)
    console.log(userLat)
 
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
        <>
            {/* <Map/> */}
            <div>
                <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBniFhD5gyPyOrEm212cVIAYVythPk2JcE`}
                loadingElement={<div style={{ height: "100%" }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `400px` }} />}
                />
            </div>
        </>
    );
}

export default Gmaps;