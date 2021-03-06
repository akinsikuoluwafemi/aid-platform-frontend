import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavigationDrawer from './NavigationDrawer';
import Login from "./Login";
import Home from './Home';

export default function Navigation() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
                


        </Switch>
      </Router>
    );
}
