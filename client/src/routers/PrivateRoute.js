import React, {useState, useEffect} from 'react';
import {Route, Redirect, useLocation} from 'react-router-dom';
import {useSelector} from 'react-redux';


const PrivateRoute = ({component: Component, ...rest}) => {

  const isLoggedIn = JSON.parse(localStorage.getItem('user'))?.token;

  return (
    <Route
      component={(props) =>
        isLoggedIn ? (
          <div>
            <Component {...props} />
          </div>
        ) : (
          <Redirect to="/auth" />
        )
      }
      {...rest}
    />
  );
};

export default PrivateRoute;
