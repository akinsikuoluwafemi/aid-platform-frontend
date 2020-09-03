import React, {useEffect, useState, useContext} from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps";
import { LatitudeContext, LongitudeContext, RequestContext } from '../LocationContext';
import { requestData } from '../data';
import * as parksData from "../skateboard-parks.json";


let data = JSON.parse(localStorage.getItem("request")) || requestData;
console.log(data)

let myJsonData = JSON.stringify(data)
console.log(myJsonData)

export const Map = () => {
 
  useEffect(() => {
        {
           {data.map(item => {
             console.log(item.location.lat, item.location.lng)
           })} 
        }
    
  },[])

    const { userLat } = useContext(LatitudeContext);
    const {userLng} = useContext(LongitudeContext);
  const [position, setPosition] = useState({
    lat: userLat,
    lng: userLng
    })
  
  const DragMarker = (event) => {
    console.log('dragging', e)
  }
 
    return (
      <GoogleMap
        defaultZoom={10}
        
        defaultCenter={{ lat: parseFloat(position.lat), lng: parseFloat(position.lng) }}
        // defaultCenter={{ lat: 45.42042, lng: -75.69243 }}
      >
        {/* {myJsonData.map((item) => (
          <Marker key={item.id}
            position={{
              lat: item.location.lat,
              lng: item.location.lng
            }} />
        ))} */}

        {/* {parksData.features.map((park) => (
          <Marker
            key={park.properties.PARK_ID}
            position={{
              lat: park.geometry.coordinates[1],
              lng: park.geometry.coordinates[0],
            }}
          />
        ))} */}

        {/* {parksData.features.map((park) => (
          <Marker
            key={park.properties.PARK_ID}
            position={{
              lat: park.geometry.coordinates[1],
              lng: park.geometry.coordinates[0],
            }}
          />
        ))} */}
        <Marker position={position}  
          draggable={true}
          onDragEnd={DragMarker}
        
        />
      </GoogleMap>
    );
}


const WrappedMap = withScriptjs(withGoogleMap(Map))




export const Gmaps = ({lat,lng}) => {
  console.log(lat, lng)
 
    return (
      <>
        {/* <Map/> */}
        <div>
          <WrappedMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBniFhD5gyPyOrEm212cVIAYVythPk2JcE`}
            loadingElement={<div style={{ height: "100%" }} />}
            containerElement={<div style={{ height: `100vh` }} />}
            mapElement={<div style={{ height: `100vh` }} />}
          />
        </div>
      </>
    );
}

// export default Gmaps;