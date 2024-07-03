import Header from './Header';
import React from 'react';
import { shallow } from 'enzyme';

describe('Header components', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders img', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('img')).toBeDefined();
    });

    it('renders h1', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('h1')).toBeDefined();
    });
});
