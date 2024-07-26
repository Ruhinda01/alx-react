import Login from './Login';
import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe ('Login components', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders form', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('form')).toBeDefined();
    });

    it('renders input', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('input')).toHaveLength(3);
    });

    it('renders label', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('label')).toHaveLength(2);
    });
});

describe('Testing state', () => {
    it('test to verify that the submit button is disabled by default', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('input[type="submit"]').props().disabled).toBe(true);
    });
    
    it('test to verify that after changing the value of the two inputs, the button is enabled', () => {
        const wrapper = shallow(<Login />);
        wrapper.find('input[type="email"]').simulate('change', { target: { value: 'test@test.com' } });
        wrapper.find('input[type="password"]').simulate('change', { target: { value: 'password' } });
        expect(wrapper.find('input[type="submit"]').props().disabled).toBe(true);
    });
});
 