import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { sendMessage } from './actions';

const List = styled.ul`
  list-style-type: none; 
  margin: 0; 
  padding: 0;
  li { padding: 5px 10px; }
  li:nth-child(odd) { background: #eee; }
`;

const ChatForm = styled.form`
  background: #000; padding: 3px; position: absolute; bottom: 0; width: 100%;
  input { border: 0; padding: 10px; width: 80%; margin-right: .5%; }
  button { width: 19%; background: rgb(130, 224, 255); border: none; padding: 10px; }
`;

const User = ({ user }) => {
  const label = user && (user.name || user.email);
  return (
    <span>
      <strong>{ label }{ label && ':' }</strong>
    </span>
  );
};

export function Chat({ messages, sendMessage }) {
  return (
    <div>
      <List>
        {messages.map((message, i) => (
          <li key={i}>
            <User user={message.user}/> {message.text}
          </li>
        ))}
      </List>
      <ChatForm onSubmit={event => {
        event.preventDefault();
        const elements = event.target.elements;
        sendMessage(elements.message.value);
        event.target.reset();
      }}>
        <input name="message" autoComplete="off" />
        <input name="url" autoComplete="off" />
        <button>Send</button>
      </ChatForm>
    </div>
  );
}

export default connect(
  state => ({ messages: state.messages }),
  { sendMessage }
)(Chat);