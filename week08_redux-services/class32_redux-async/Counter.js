import React, { Component } from 'react';

class CounterContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  changeCounter(val) {
    this.setState({ count: this.state.count + val });
  }

  render() {
    const { count } = this.state;
    return <Counter count={count} 
      incr={() => this.changeCounter(-1)}
      decr={() => this.changeCounter(+1)}/>;
  }
}

function Counter({ count, incr, decr }) {
  return (
    <div>
      <button onClick={() => incr()}>-</button>
      <span>{count}</span>
      <button onClick={() => decr()}>+</button>
    </div>
  );
}