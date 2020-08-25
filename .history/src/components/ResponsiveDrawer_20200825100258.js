import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';

import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme, fade } from '@material-ui/core/styles';
import '../pages/Home.scss';
import NavigationDrawer from '../components/NavigationDrawer';



const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },


  

 
}));

function ResponsiveDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />

      <NavigationDrawer/>

      <main className={classes.content}>
        <div className={classes.toolbar}/>

       

        <p>nav</p>

      </main>
    </div>
  );
}



export default ResponsiveDrawer;