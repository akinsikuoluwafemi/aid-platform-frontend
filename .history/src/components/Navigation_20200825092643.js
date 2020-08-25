import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavigationDrawer from './NavigationDrawer';

export default function Navigation() {
    return (
        <Router>

            <Switch>
                <Route exact path="/nav" component={NavigationDrawer}/>

            </Switch>
            
        </Router>
    )
}
