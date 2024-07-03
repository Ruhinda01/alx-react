import Notifications from './Notifications';
import { shallow } from 'enzyme';
import React from 'react';

describe('Notifications components', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders unordered list', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('ul')).toBeDefined();
    });

    it('renders the list items', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('li')).toHaveLength(3);
    });

    it('renders the text "Here is the list of notifications"', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('p')).toHaveLength(1);
        expect(wrapper.find('p').text()).toBe('Here is the list of notifications');
    })
});
