import React from 'react';
import { Navigate } from "react-router-dom";

function SignRoute({ element: Component, isLoggedIn, ...props  }) {
  return (
    !isLoggedIn ? <Component {...props} /> : <Navigate to="/movies" replace/>
  )
}

export default SignRoute;
