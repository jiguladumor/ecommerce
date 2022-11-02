import React from 'react'
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

export default function ClientRoute({ component: Component, ...rest }) {
    const auth = useSelector(state => state.auth)
    console.log(auth.user);
  return (
    <Route {...rest} render={props => (
        auth.user !== null ?
            <>
                <Component {...props} />
            </>
            :
            <>
            <Redirect to={"/Logins"} />
            </>
    )}
    />
  )
}
