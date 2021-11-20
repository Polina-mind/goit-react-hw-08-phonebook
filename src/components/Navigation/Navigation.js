import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';
import './Navigation.css';

const Navigation = ({ isAuthenticated }) => {
  return (
    <ul className="NavLinks">
      <li>
        <NavLink
          exact
          to="/"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Главная
        </NavLink>
      </li>
      <li>
        {isAuthenticated && (
          <NavLink
            to="/contacts"
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Контакты
          </NavLink>
        )}
      </li>
    </ul>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
