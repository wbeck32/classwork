import React, { Component } from 'react';

class ClassComponent extends Component {

  render() {
    const { foo } = this.props;
    return <div>{foo}</div>;
  }
}

function FunctionComponent({ foo }) {
  return <div>{foo}</div>;
}