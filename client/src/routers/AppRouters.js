import React, {useState, useEffect} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {useSelector} from 'react-redux';
import PrivateRoute from './PrivateRoute';
import ShakePage from '../components/ShakePage';
import LibraryPage from '../components/LibraryPage';
import MyBarPage from '../components/MyBarPage';
import Auth from '../components/Auth';
import Navbar from '../components/NavBar';
import LoadingPage from '../components/LoadingPage';

const AppRouters = () => {
  const [loading, setLoading] = useState(true);
  const cocktails = useSelector((state) => state.cocktails);
  const myBar = useSelector((state) => state.myBar);

  useEffect(() => {

      if (cocktails.length > 0) {
        setLoading(false);
      }
      if (myBar.length > 0) {
        setLoading(false);
      }
  }, [cocktails, myBar]);

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        {loading ? (
          <LoadingPage />
        ) : (
          <Switch>
            <Route exact path="/" component={ShakePage} />
            <Route exact path="/library" component={LibraryPage} />
            <PrivateRoute exact path="/mybar" component={MyBarPage} />
            <Route path="/auth" component={Auth} />
          </Switch>
        )}
      </div>
    </BrowserRouter>
  );
};

export default AppRouters;
