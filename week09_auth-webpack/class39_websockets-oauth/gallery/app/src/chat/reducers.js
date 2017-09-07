import { SEND_MESSAGE, RECEIVE_MESSAGE } from './constants';

export function messages(state = [], { type, payload }) {
  switch(type) {
    case SEND_MESSAGE:
    case RECEIVE_MESSAGE:
      return [ ...state, payload ];
    default:
      return state;
  }
}