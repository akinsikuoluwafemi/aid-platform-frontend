import React, {useEffect, useState, useContext} from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import "../pages/Home.scss";
import NavigationDrawer from "../components/NavigationDrawer";
import { requestData } from "../data";
import { LatitudeContext } from "../LatitudeContext";

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
}));


// 

import {
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const MapWithAMarker = withGoogleMap(props =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    <Marker
      position={{ lat: -34.397, lng: 150.644 }}
    />
  </GoogleMap>
);

<MapWithAMarker
  containerElement={<div style={{ height: `400px` }} />}
  mapElement={<div style={{ height: `100%` }} />}
/>



// 


function Home() {
  
  const [userLat, setUserLat] = useState(0)
  const [userLng, setUserLng] = useState(0)
  const [request, setRequest] = useState(requestData);

  useEffect(() => {
    console.log(request)
    
    getUserLocation()

  }, []);

  const getUserLocation = () => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        let { latitude, longitude } = position.coords;
        console.log(latitude, longitude)
        setUserLat(latitude)
        setUserLng(longitude)

      },
      (error) => {
        if (error.code === 1) {
          // setLat(do something)
          // setLng(do something)
          alert('Kindly allow location, for a more immersive experience with the app.')
          console.log(error);
        }
      }
    );
  }
  console.log(userLat,userLng)
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />

      <NavigationDrawer lat={userLat} lng={userLng} />
        <main className={classes.content}>
          <div className={classes.toolbar}></div>

          <p>Home</p>
        </main>
    </div>
  );
}

export default Home;
