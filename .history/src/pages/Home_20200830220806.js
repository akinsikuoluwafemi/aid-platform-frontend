import React, {useEffect} from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import "../pages/Home.scss";
import NavigationDrawer from "../components/NavigationDrawer";

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

useEffect(() => {
  

  window.navigator.geolocation.getCurrentPosition(
    (posiion) => console.log(posiion), 
    (error)
  );

},[])


function Home() {
  
  

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />

      <NavigationDrawer />

      <main className={classes.content}>
        <div className={classes.toolbar} />

        <p>Home</p>

      </main>
    </div>
  );
}

export default Home;
