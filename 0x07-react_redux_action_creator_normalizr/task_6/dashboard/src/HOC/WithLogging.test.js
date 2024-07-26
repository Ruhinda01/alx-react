import React from 'react';
import { shallow, mount } from 'enzyme';
import withLogging from './WithLogging';
import Login from '../Login/Login';


const originalConsole = console;

describe('WithLogging HOC', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log');
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('should call console.log with Component when the wrapped element is pure html', () => {
    const PassingHOC = withLogging(() => <p />);
    const comp = <PassingHOC />;
    const wrapper = mount(comp);
    expect(consoleSpy).toHaveBeenCalled();
    expect(consoleSpy).toHaveBeenCalledWith('Component Component is mounted');
    wrapper.unmount();
    expect(consoleSpy).toHaveBeenCalled();
    console.debug(wrapper);
    expect(consoleSpy).toHaveBeenCalledWith('Component Component is going to unmount');
  });

  it('should call console.log with Component when the wrapped element is the Login component', () => {
    const PassingHOC = withLogging(Login);
    const comp = <PassingHOC />;
    const wrapper = mount(comp);
    expect(consoleSpy).toHaveBeenCalled();
    expect(consoleSpy).toHaveBeenCalledWith('Component Login is mounted');
    wrapper.unmount();
    expect(consoleSpy).toHaveBeenCalled();
    expect(consoleSpy).toHaveBeenCalledWith('Component Login is going to unmount');
  });
});
