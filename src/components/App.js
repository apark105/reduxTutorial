import React, { Component } from 'react';
import '../assets/css/App.css';
import Clock from './Clock';
import { connect } from 'react-redux';
import { changeColor } from '../actions/index';

class App extends Component {

  changeTheColor=()=>{
    this.props.changeColor()
  }

  render() {
    return (
      <div className="App">
          <h2 className="">Redux Clock</h2>
          <Clock/>
          <button onClick={this.changeTheColor} className="btn btn-dark"> Change Color </button>
      </div>
    );
  }
}

export default connect(null, {
  changeColor,
})(App);
