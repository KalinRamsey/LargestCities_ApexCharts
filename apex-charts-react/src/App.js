import React, { Component } from 'react';

import './App.css';

import PopChart from './components/PopChart';

export class App extends Component {
  render() {
    return (
      <div className="container">
        <PopChart />
      </div>
    )
  }
}

export default App

