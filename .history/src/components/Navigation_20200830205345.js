import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from "../pages/SignUp";
import Home from '../pages/Home';

export default function Navigation() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={SignUp} />
        </Switch>
      </Router>
    );
}
