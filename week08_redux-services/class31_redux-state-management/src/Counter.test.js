import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { Counter } from './Counter';

describe('Counter', () => {

  it('shows count and two buttons', () => {
    const wrapper = shallow(<Counter count={3}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('disables decrement when count is 0', () => {
    const wrapper = shallow(<Counter count={0}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

});