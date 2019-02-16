import React, { Component } from 'react';
import { connect } from 'react-redux';
import { tick} from '../actions/index';

class Clock extends Component {

  componentDidMount() {
    setInterval( ()=> {this.props.tick()}, 1000 );
  }

  render() {
    const { time, date } = this.props;
    const colorStyle = {color: this.props.color}
    return (
      <div className="clock">
        <h1 style={ colorStyle }>{time}</h1>
        <hr/>
        {date}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    time: state.clock.currentTime,
    date: state.clock.date,
    color: state.color.color
  }
}

export default connect(mapStateToProps, {
  tick,
})(Clock);
