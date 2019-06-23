import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import './App.css';

class App extends React.Component {
  state = {
    isAuthenticated: false
  }
  componentDidMount() {
    this.authenticate();
  }

  authenticate = () => {
    const isAuthenticated = sessionStorage.getItem('username') ? true : false;
    this.setState({
      isAuthenticated
    })
  }

  unAuthenticate = () => {
    sessionStorage.removeItem('username');
    window.location.reload();
  }

  render() {
    return (
      <div className="App">
        <Header isAuthenticated={this.state.isAuthenticated} onLogout={this.unAuthenticate}/>
        <main>
          {this.state.isAuthenticated ? <Home/> : <Login onAuthenticate={this.authenticate} />}
        </main>
      </div>
    );
  }
}


export default App;
