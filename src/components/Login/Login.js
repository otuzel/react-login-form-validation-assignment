import React from 'react';
import { validate } from '../../utils/validation';
import LoginForm from '../LoginForm/LoginForm';
import Errors from '../Errors/Errors';
import './Login.scss';

class Login extends React.Component {
  state = {
    inputs: {
      username: '',
      password: ''
    },
    formValid: false,
    errors: []
  }
  // All form inputs are checked in any input change
  handleChange = (e) => {
    const newInputState = {...this.state.inputs};
    newInputState[e.target.name]= e.target.value;
    this.setState({
      inputs: newInputState
    }, () => this.validateInputs(this.state.inputs));
  }
  validateInputs = (formData) => {
    let errors = [];
    for (let input in formData) {
      errors.push(...validate(input, formData[input]).errors);
    }
    this.setState({
      errors,
      formValid: errors.length === 0
    });
  }
  // Updates the sessionStorage and authenticates the user
  onSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem('username', this.state.inputs.username);
    this.props.onAuthenticate();
  }

  render() {
    return (
      <div className="login-wrapper">
        <LoginForm onChange={this.handleChange} onSubmit={this.onSubmit} formValid={this.state.formValid}/>
        <Errors errors={this.state.errors}/>
      </div>
    );
  }
}

export default Login;