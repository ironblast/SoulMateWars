import React, { Component } from 'react';
import wallpaper from './wallpaper.jpg';
import './App.css';
import Accueil from './Accueil.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">SoulMateWars</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <body>

        </body>
      </div>

    );
  }
}

export default App;
