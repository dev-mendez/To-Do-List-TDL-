import React from 'react';
import { Component } from 'react';

class Engine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: 0,
    };
  }

  handlerClick = () => {
    let count = 0;
    setInterval(() => {
      count++;
      this.setState({
        date: count,
      });
    }, 1000);
  };

  render() {
    return (
      <div>
        <Tick click={this.handlerClick} date={this.state.date} />
        <Tick date={this.state.date} />
      </div>
    );
  }
}

const Tick = (props) => {
  return (
    <div>
      <h1 onClick={() => props.click()}>Counter: {props.date}</h1>
    </div>
  );
};

export default Engine;
