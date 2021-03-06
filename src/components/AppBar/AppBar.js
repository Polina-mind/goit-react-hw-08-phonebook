import React from 'react';
import { connect } from 'react-redux';
import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import UserNav from '../UserNav';
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';

import './AppBar.css';

const AppBar = ({ isAuthenticated }) => (
  <header>
    <Navigation />

    {isAuthenticated ? <UserNav /> : <AuthNav />}
  </header>
);

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
