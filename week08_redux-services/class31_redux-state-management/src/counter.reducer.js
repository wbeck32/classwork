import { INCREMENT, DECREMENT } from './counter.constants';

export default (state = { count: 0 }, { type, payload }) => {
  switch (type) {
    case INCREMENT:
      return { count: state.count + payload };
    case DECREMENT:
      return { count: state.count - payload };
    default:
      return state;
  }
};
