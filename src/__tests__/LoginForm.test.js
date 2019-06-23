import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from '../components/LoginForm/LoginForm';

let container;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('submit button should start disabled', () => {
  ReactDOM.render(<LoginForm />, container);
  const button = container.querySelector('button');
  expect(button.disabled).toBe(true);
});

it('submit button should become enabled when form is valid', () => {
  ReactDOM.render(<LoginForm formValid={true} />, container);
  const button = container.querySelector('button');
  expect(button.disabled).toBe(false);
});