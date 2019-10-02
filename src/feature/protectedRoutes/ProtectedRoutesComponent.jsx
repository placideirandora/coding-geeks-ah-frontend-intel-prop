/* eslint-disable react/jsx-props-no-spreading */
/* istanbul ignore file */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import checkAuthUser from '../../app/helpers/CheckAuthUser';


const user = checkAuthUser();

const ProtectedRoutes = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (user.isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />)} />
);

export default ProtectedRoutes;
