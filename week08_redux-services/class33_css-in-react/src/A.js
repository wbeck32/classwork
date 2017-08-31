import React from 'react';
import styled, { css } from 'styled-components';

const color = 'coral';

const ASection = styled.div`
  p {
    color: {color}
  }
`;

const Button = styled.button`
  outline: 0;
  border: 1px solid black;
  ${props => props.bold ? css`background: steelblue` : css`color: steelblue`};
`;

function CoolButton(props) {
  return (
    <div className={props.className}>
      I am a cool button <button>with a button</button>
    </div>
  );
}

const StyledCoolButton = styled(CoolButton)`
  height: 100px;
  width: 300px;
  background: lightsteelblue;
  color: steelblue;
`;

export default function A({ foo }) {
  return (
    <ASection>
      <p>Component A</p>
      <Button>Yo!</Button>
      <Button bold={foo}>Ya!</Button>
      <StyledCoolButton/>
    </ASection>
  );
}