import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Button from '@mui/material/Button';
import { logIn } from '../redux/auth/auth-operations';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <>
        <h1 className="Title">Страница логина</h1>

        <form type="submit" onSubmit={this.handleSubmit} className="Form">
          <label className="Label">
            Почта
            <input
              className="Input"
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              placeholder="Name@mail.com"
              required
            />
          </label>

          <label className="Label">
            Пароль
            <input
              className="Input"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              autoComplete="off"
              required
            />
          </label>

          <button type="submit" className="Button">
            Войти
          </button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = {
  onSubmit: logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);
