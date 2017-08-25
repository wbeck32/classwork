import React from 'react';
import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { Routes } from './App';
import { MemoryRouter } from 'react-router-dom';

describe('Routes', () => {

  it('Defaults to home', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Routes/>
      </MemoryRouter>
    );
    const home = wrapper.find('Home');
    expect(home.length).toBe(1);
  });

  it('/about', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/about']}>
        <Routes/>
      </MemoryRouter>
    );
    const home = wrapper.find('About');
    expect(home.length).toBe(1);
  });
})
