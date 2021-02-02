import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import ShakePage from '../components/ShakePage';
import LibraryPage from '../components/LibraryPage';
import MyBarPage from '../components/MyBarPage';
import Auth from '../components/Auth';
import Navbar from '../components/NavBar';

const AppRouters = () => (
    <BrowserRouter>
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={ShakePage} />
                <Route exact path="/library" component={LibraryPage} />
                <PrivateRoute exact path="/mybar" component={MyBarPage} />
                <Route path="/auth" component={Auth} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouters;