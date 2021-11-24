import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Button from '@mui/material/Button';
import { register } from '../redux/auth/auth-operations';

class RegisterView extends Component {
  state = {
    name: '',
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
    const { name, email, password } = this.state;

    return (
      <>
        <h1 className="Title">Страница регистрации</h1>

        <form type="submit" onSubmit={this.handleSubmit} className="Form">
          <label className="Label">
            Имя
            <input
              className="Input"
              value={name}
              onChange={this.handleChange}
              type="text"
              name="name"
              placeholder="Polina"
              required
            />
          </label>

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
            Зарегистрироваться
          </button>
        </form>
      </>
    );
  }
}

// const mapDispatchToProps = dispatch => ({
//   onSubmit: data => dispatch(register(data)),
// });

//сокращенный синтаксис
const mapDispatchToProps = {
  onSubmit: register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
