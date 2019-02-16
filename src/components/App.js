import React, { Component } from 'react';
import '../assets/css/App.css';
import Clock from './Clock';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h2 className="">Redux Clock</h2>
          <Clock/>
          <button className="btn btn-dark"> Change Color </button>
      </div>
    );
  }
}

export default App;
