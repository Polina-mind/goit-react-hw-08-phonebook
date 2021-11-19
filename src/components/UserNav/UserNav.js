import React from 'react';
import { connect } from 'react-redux';
import { getUserName } from '../../redux/auth/auth-selectors';
import './UserNav.css';

const UserNav = ({ name, onLogout }) => {
  return (
    <ul className="AuthLinks">
      <li>
        <p className="Text">Welcome, {name}</p>
      </li>
      <li>
        <button className="LogoutBtn" type="button" onClick={onLogout}>
          Logout
        </button>
      </li>
    </ul>
  );
};

const mapStateToProps = state => ({
  name: getUserName(state),
});

// const mapDispatchToProps = dispatch => ({
//   onLogout: id => dispatch(deleteContact(id)),
// });

export default connect(mapStateToProps)(UserNav);
