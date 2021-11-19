import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import UserNav from '../UserNav';
import './AppBar.css';

const AppBar = ({ isAuthenticated = false }) => (
  <header>
    <Navigation />

    {isAuthenticated ? <UserNav /> : <AuthNav />}
  </header>
);

AppBar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default AppBar;
