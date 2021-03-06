import React, {useEffect, useState, useContext} from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import "../pages/Home.scss";
import NavigationDrawer from "../components/NavigationDrawer";
import { requestData } from "../data";
import { LocationContext } from '../LocationContext';

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




function Home() {
  
  const [userLat, setUserLat] = useState(null)
  const [userLng, setUserLng] = useState(null)
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
        // setLatitude(latitude);
        console.log(position);
      },
      (error) => {
        if (error.code === 1) {
          // setLat(do something)
          // setLng(do something)
          console.log(error);
        }
      }
    );
  }
  
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />

      <NavigationDrawer />
      {/* <LocationContext.Provider value={{ userLat, setUserLat }}> */}
        <main className={classes.content}>
          <div className={classes.toolbar}></div>

          <p>Home</p>
        </main>
      {/* </LocationContext.Provider> */}
    </div>
  );
}

export default Home;
