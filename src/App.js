import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { todos } from './todos.json';

class App extends Component {
  render () {
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a href="" class="text-white">
          Tasks
        </a>
      </nav>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}
}

export default App;
