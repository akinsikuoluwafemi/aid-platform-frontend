import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavigationDrawer from './NavigationDrawer';
import ResponsiveDrawer from './Login';


export default function Navigation() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={NavigationDrawer} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    );
}
