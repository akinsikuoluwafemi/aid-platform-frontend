import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from "../pages/";
import Home from '../pages/Home';

export default function Navigation() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={SignUp} />
                


        </Switch>
      </Router>
    );
}
