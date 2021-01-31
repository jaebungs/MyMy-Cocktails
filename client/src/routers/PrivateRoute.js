import React, {useState, useEffect} from 'react';
import {Route, Redirect, useLocation} from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  const isAuthorized = false;

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
    
  }, [location]);

  return (
    <Route
      component={(props) =>
        user?.result ? (
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
