import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './counter.actions';

export function Counter({ count, dispatch }) {
  return (
    <div>
      <button 
        onClick={() => dispatch(decrement())}
        disabled={count <= 0}
      >-</button>
      <span style={{ padding: '10px' }}>
        {count}
      </span>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
}

export default connect(
  state => ({ count: state.count })
)(Counter);