import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import HomePage from '../components/HomePage';
import MyBarPage from '../components/MyBarPage';
import Auth from '../components/Auth';
import Navbar from '../components/NavBar';

const AppRouters = () => (
    <BrowserRouter>
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <PrivateRoute exact path="/mybar" component={MyBarPage} />
                <Route path="/auth" component={Auth} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouters;