import React from 'react';
import PropTypes from 'prop-types';

import { Redirect, Route } from 'react-router-dom';

export const PublicRoute = ({ isLogged, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogged ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

PublicRoute.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
