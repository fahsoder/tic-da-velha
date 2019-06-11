import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { Login } from './ui/login/index';

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      player1: '',
      player2: 'comp',
      wins: []
    }
  }
  render() {
    return (
      <div className="App">
        <Route component={ Login } path="/" exact />
      </div>
    );
  }
}

export default App;
