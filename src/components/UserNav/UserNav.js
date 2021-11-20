import React from 'react';
import { connect } from 'react-redux';
import { getUserName } from '../../redux/auth/auth-selectors';
import { logOut } from '../../redux/auth/auth-operations';
import './UserNav.css';

const UserNav = ({ name, onLogout }) => {
  return (
    <ul className="AuthLinks">
      <li>
        <p className="Text">{name}</p>
      </li>
      <li>
        <button className="LogoutBtn" type="button" onClick={onLogout}>
          Выход
        </button>
      </li>
    </ul>
  );
};

const mapStateToProps = state => ({
  name: getUserName(state),
});

const mapDispatchToProps = {
  onLogout: logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserNav);
