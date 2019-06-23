import React from 'react';
import './Header.scss';

function Header(props) {
  return <header>
    <h1>Chuck Jokes</h1>
    {
      props.isAuthenticated &&
      <button className="signout-button" onClick={props.onLogout}>Sign out</button>
    }
  </header>
}

export default Header;