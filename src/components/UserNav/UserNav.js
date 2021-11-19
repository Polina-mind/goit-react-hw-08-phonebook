import React from 'react';
import './UserNav.css';

const UserNav = () => {
  return (
    <ul className="AuthLinks">
      <li>
        <p className="Text">Welcome,</p>
      </li>
      <li>
        <button className="LogoutBtn">Logout</button>
      </li>
    </ul>
  );
};

export default UserNav;
