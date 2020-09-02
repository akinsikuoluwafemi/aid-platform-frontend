import React, {Component,useEffect, useState, useContext} from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import { LatitudeContext, LongitudeContext, RequestContext } from '../LocationContext';





class Map extends Component {
 
  static contextType = RequestContext

    // const { userLat } = useContext(LatitudeContext);
    // const {userLng} = useContext(LongitudeContext);
    // const { open } = useContext(RequestContext)
    // console.log(request)
    // console.log(RequestContext)
    render(){
      const {lat, lng, request} = this.context

      return (
    <GoogleMap
      defaultZoom={10}
            defaultCenter={{ lat:lat, lng: userLng }}
            
    />
        
  );
    }
    
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
            containerElement={<div style={{ height: `100vh` }} />}
            mapElement={<div style={{ height: `100vh` }} />}
          />
        </div>
      </>
    );
}

export default Gmaps;