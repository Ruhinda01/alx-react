import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { shallow } from 'enzyme';
import React from 'react';

describe('Notifications components', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders unordered list', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find('ul')).toBeDefined();
    });

    it('renders NotificationItem', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find(NotificationItem)).toHaveLength(3);
    });

    it('renders the text "Here is the list of notifications"', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find('p')).toHaveLength(1);
        expect(wrapper.find('p').text()).toBe('Here is the list of notifications');
    });

    it('first NotificationItem element renders the right html', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find(NotificationItem).first().html()).toBe('<li data-notification-type="default">New course available</li>');
    });

    it('renders the menu item whem displayDrawer is false', () => {
        const wrapper = shallow(<Notifications displayDrawer={false} />);
        expect(wrapper.find('div.menuItem')).toHaveLength(1);
        expect(wrapper.find('div.menuItem').text()).toBe('Your notifications');
    });

    it('checks that the div.Notifications is not being displayed when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications displayDrawer={false} />);
        expect(wrapper.find('div.Notifications')).toHaveLength(0);
    });

    it('checks that the div.Notifications is being displayed when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find('div.Notifications')).toHaveLength(1);
    });

    it('checks that the menu item is being displayed when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find('div.menuItem')).toHaveLength(1);
        expect(wrapper.find('div.menuItem').text()).toBe('Your notifications');
    });
});
