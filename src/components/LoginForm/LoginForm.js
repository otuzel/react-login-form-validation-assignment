import React from 'react';
import './LoginForm.scss';

function LoginForm(props) {
  return (
    <>
      <form className="form" onSubmit={props.onSubmit}>
        <div className="form__section">
          <label className="form__label" htmlFor="username">Username</label>
          <input className="form__input" type="text" name="username" id="username" onChange={props.onChange}/>
        </div>
        <div className="form__section">
          <label className="form__label" htmlFor="password">Password</label>
          <input className="form__input" type="text" name="password" id="password" onChange={props.onChange}/>
        </div>
        <button className="form__button" disabled={!props.formValid} type="submit">
          Let me in
        </button>
      </form>
    </>
  );
}

export default LoginForm;