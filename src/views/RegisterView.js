import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import './Form.css';

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

    //   this.props.onSubmit(this.state);
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
              //   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              placeholder="Polina@gmail.com"
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
              // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              placeholder="*****"
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

// const mapDispatchToProps = dispatch => ({
//   onSubmit: (name, number) => dispatch(addContact(name, number)),
// });

// export default connect(null, mapDispatchToProps)(RegisterView);
export default RegisterView;
