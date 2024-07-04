import App from './App';
import { shallow } from 'enzyme';
import React from 'react';
import Notification from '../Notifications/Notifications';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';


describe('App components', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders Notifications', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Notification />)).toBe(true);
  });

  it('renders Header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Header />)).toBe(true);
  });

  it('renders Login', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Login />)).toBe(true);
  });

  it('renders Footer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Footer />)).toBe(true);
  });

  it('renders CourseList when isLoggedIn is true', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.contains(<CourseList />)).toBe(true);
  });

  it('renders Login when isLoggedIn is false', () => {
    const wrapper = shallow(<App isLoggedIn={false} />);
    expect(wrapper.contains(<Login />)).toBe(true);
  })

});
