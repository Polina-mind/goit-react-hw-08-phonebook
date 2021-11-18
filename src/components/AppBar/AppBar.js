import React from 'react';
import { NavLink } from 'react-router-dom';
import './AppBar.css';

const AppBar = () => {
  return (
    <header>
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
    </header>
  );
};

export default AppBar;
