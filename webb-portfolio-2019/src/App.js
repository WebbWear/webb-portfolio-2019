import React, { Component } from 'react';
import logo from './headshot.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Jeff Webb's Portfolio!!
          </p>
          
        </header>
      </div>
    );
  }
}

export default App;
