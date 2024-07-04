import React from 'react';
import NotificationItem from './NotificationItem';
import { shallow } from 'enzyme';

describe('NotificationItem components', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<NotificationItem />);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders the correct html', () => {
        const wrapper = shallow(<NotificationItem type="default" value="test" />);
        expect(wrapper.html()).toEqual('<li data-notification-type="default">test</li>');
    });

    it('renders the correct html', () => {
        const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
        expect(wrapper.html()).toEqual('<li data-notification-type="default"><u>test</u></li>');
    });
});
