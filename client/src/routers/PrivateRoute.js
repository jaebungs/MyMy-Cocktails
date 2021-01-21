import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {
    const isAuthorized = true;

    return (
        <Route component={(props)=>(
            isAuthorized ? (
                <div>
                    <Component {...props} />
                </div>
            ) : (
                <Redirect to='/' />
            )
        )} 
        {...rest}
        />
    )
}

export default PrivateRoute;