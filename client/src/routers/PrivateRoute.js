import React, {useState, useEffect} from 'react';
import {Route, Redirect, useLocation} from 'react-router-dom';
import {useSelector} from 'react-redux';


const PrivateRoute = ({component: Component, ...rest}) => {
    const token = useSelector(state => state.auth.token)

  return (
    <Route
      component={(props) =>
        token ? (
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
