import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavigationDrawer from './NavigationDrawer';
import ResponsiveDrawer from './ResponsiveDrawer'
export default function Navigation() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={NavigationDrawer} />
          <Route exact path="/nav" component={ResponsiveDrawer} />
        </Switch>
      </Router>
    );
}
