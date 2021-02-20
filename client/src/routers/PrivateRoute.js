import React from 'react';
import {Route, Redirect} from 'react-router-dom';

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
