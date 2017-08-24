import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import ViewSelector, { ViewDisplay } from './ViewSelector';

describe('ViewDisplay', () => {

  function testView(view) {
    it(`shows ${view}`, () => {
      const wrapper = shallow(<ViewDisplay view={view} images={[]} />);
      expect(toJSON(wrapper)).toMatchSnapshot();
    });
  }

  testView('gallery');
  testView('detail');
  testView('thumbnail');
});

describe('ViewSelector', () => {

  it('toggles to correct view', () => {
    const wrapper = shallow(<ViewSelector images={[]} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
    
    const component = wrapper.instance();
    
    component.handleChange('gallery');
    wrapper.update();
    expect(toJSON(wrapper)).toMatchSnapshot();
    
    component.handleChange('detail');
    wrapper.update();
    expect(toJSON(wrapper)).toMatchSnapshot();

  });
})
