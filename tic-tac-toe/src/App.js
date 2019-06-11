import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { Login } from './ui/login/index';

import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Route component={ Login } path="/" />
      </div>
    );
  }
}

export default App;
