import React, {useEffect, useState} from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";






function Map() {
 
    useEffect(() => {
        getUserLocation;
    },[])


     const getUserLocation = () => {
       window.navigator.geolocation.getCurrentPosition(
         (position) => {
           let { latitude, longitude } = position.coords;
           console.log(latitude, longitude);
           setUserLat(latitude);
           setUserLng(longitude);
         },
         (error) => {
           if (error.code === 1) {
             // setLat(do something)
             // setLng(do something)
             alert(
               "Kindly allow location, for a more immersive experience with the app."
             );
             console.log(error);
           }
         }
       );
     };

 
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