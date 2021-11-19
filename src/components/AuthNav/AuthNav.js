import React from 'react';
import { NavLink } from 'react-router-dom';
import './AuthNav.css';

const AuthNav = () => {
  return (
    <ul className="AuthLinks">
      <li>
        <NavLink
          exact
          to="/register"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Регистрация
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Логин
        </NavLink>
      </li>
    </ul>
  );
};

export default AuthNav;
