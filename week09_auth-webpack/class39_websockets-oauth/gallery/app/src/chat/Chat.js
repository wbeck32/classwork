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

const Scroll = styled.div`
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 100px;
  overflow-y: auto;
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
      <Scroll>
        <List>
          {messages.map((message, i) => (
            <li key={i}>
              <div><User user={message.user}/> {message.text}</div>
              <img alt={message.text} style={{ height: 50 }} src={message.url}/>
            </li>
          ))}
        </List>
      </Scroll>
      <ChatForm onSubmit={event => {
        event.preventDefault();
        const elements = event.target.elements;
        sendMessage({
          url: elements.url.value,
          text: elements.message.value
        });
        event.target.reset();
      }}>
        <input name="message" autoComplete="off" />
        <hr/>
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