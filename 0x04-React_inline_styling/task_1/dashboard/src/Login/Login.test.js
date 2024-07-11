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
        expect(wrapper.find('input')).toHaveLength(2);
    });

    it('renders label', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('label')).toHaveLength(2);
    })
})