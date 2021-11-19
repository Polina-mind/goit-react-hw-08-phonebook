import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
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
        <NavLink
          to="/contacts"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Контакты
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
