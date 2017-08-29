import { INCREMENT, DECREMENT } from './counter.constants';

export function increment(amount = 1) {
  return {
    type: INCREMENT,
    payload: amount
  };
}

export function decrement(amount = 1) {
  return {
    type: DECREMENT,
    payload: amount
  };
}