import App from './App';
import { shallow } from 'enzyme';
import React from 'react';

describe('App components', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  // it('renders a div with the class App-header', () => {
  //   const wrapper = shallow(<App />);
  //   expect(wrapper.find('.App-header')).toBeDefined();
  // });

  // it('renders a div with the class App-body', () => {
  //   const wrapper = shallow(<App />);
  //   expect(wrapper.find('.App-body')).toBeDefined();
  // });

  // it('renders a div with the class App-footer', () => {
  //   const wrapper = shallow(<App />);
  //   expect(wrapper.find('.App-footer')).toBeDefined();
  // });
});
