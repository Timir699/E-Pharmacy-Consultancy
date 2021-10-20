import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    // hooks
    const { user, isLoading } = useAuth()
    localStorage.getItem('local')
    if (isLoading) {
        return <Spinner animation="border" variant="warning" />
    }
    return (
        <div>
            <Route
                {...rest}
                render={({ location }) => user.email ? children : <Redirect to={{
                    pathname: "/Login",
                    state: { from: location }

                }} />} >
            </Route>
        </div>
    );
};

export default PrivateRoute;