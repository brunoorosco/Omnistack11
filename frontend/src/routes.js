import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Logon} exact/>
                <Route path="/register" component={Register} exact/>
                <Route path="/dashboard" component={Profile} exact/>
            </Switch>
        </BrowserRouter>
    );
}