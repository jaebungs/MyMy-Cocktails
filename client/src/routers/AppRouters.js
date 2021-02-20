import React, { lazy, Suspense } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import LoadingPage from '../components/LoadingPage';

const ShakePage = lazy(() => import('../components/ShakePage'));
const LibraryPage = lazy(()=> import('../components/LibraryPage'));
const MyBarPage = lazy(()=>import('../components/MyBarPage'));
const Auth = lazy(()=>import('../components/Auth'));
const Navbar = lazy(()=> import('../components/Navbar'));

const AppRouters = () => {

  return (
    <BrowserRouter>
        <Suspense fallback={<LoadingPage />}>
          <Navbar />
          <Switch>
            <Route exact path="/" component={ShakePage} />
            <Route exact path="/library" component={LibraryPage} />
            <PrivateRoute exact path="/mybar" component={MyBarPage} />
            <Route path="/auth" component={Auth} />
          </Switch>
        </Suspense>
    </BrowserRouter>
  );
};

export default AppRouters;
