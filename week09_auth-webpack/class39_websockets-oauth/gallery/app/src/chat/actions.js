import io from 'socket.io-client';
import { SEND_MESSAGE, RECEIVE_MESSAGE } from './constants';
import store from '../store/index';

const socket = io();

let token = '';
store.subscribe(() => {
  const { token: newToken } = store.getState().auth;
  if(newToken !== token) {
    token = newToken;
    if(token) {
      socket.emit('auth', token);
    }
  }
});

const dispatchMessage = message => {
  store.dispatch({ type: RECEIVE_MESSAGE, payload: message });
};
socket.on('message', dispatchMessage);
socket.on('messages', messages => {
  messages.map(dispatchMessage);
});

export function sendMessage(message) {
  return dispatch => {
    socket.emit('message', message);
    dispatch({ type: SEND_MESSAGE, payload: message });
  };
}