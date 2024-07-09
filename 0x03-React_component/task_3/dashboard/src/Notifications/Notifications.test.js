import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { getLastestNotification } from '../utils/utils';
import { shallow } from 'enzyme';
import React from 'react';

describe('Notifications components', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper).toMatchSnapshot();
    });

    // it('renders unordered list', () => {
    //     const wrapper = shallow(<Notifications displayDrawer={true} />);
    //     expect(wrapper.find('ul')).toBeDefined();
    // });

    it('renders NotificationItem', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
        expect(wrapper.find(NotificationItem)).toHaveLength(1);
        expect(wrapper.find(NotificationItem).first().html()).toBe('<li data-notification-type="default">No new notification for now</li>');
    });

    it('renders the text "Here is the list of notifications"', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find('p')).toHaveLength(1);
        expect(wrapper.find('p').text()).toBe('Here is the list of notifications');
    });

    // it('first NotificationItem element renders the right html', () => {
    //     const wrapper = shallow(<Notifications displayDrawer={true} />);
    //     expect(wrapper.find(NotificationItem).first().html()).toBe('<li data-notification-type="default">New course available</li>');
    // });

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

describe('Testing Notification when displayDrawer is true and listNotifications contains 3 items', () => {
    let wrapper;
    const listNotifications = [
        {id: 1, type: 'default', value: 'New course available'},
        {id: 2, type: 'urgent', value: 'New resume available'},
        {id: 3, type: 'urgent', html: {__html: getLastestNotification()}},
      ];
    beforeEach(() => {
        wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    });

    it('renders 3 NotificationItem', () => {
        expect(wrapper.find(NotificationItem)).toHaveLength(3);
        expect(wrapper.find(NotificationItem).first().html()).toBe('<li data-notification-type="default">New course available</li>');
    });
});


describe('Testing that markAsRead calls the console.log function with the right message', () => {
    afterEach(() => {
        console.log.mockRestore();
    });

    it('calls the console.log function with the right message', () => {
        const mockLog = jest.spyOn(console, 'log').mockImplementation(() => {});
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
        const instance = wrapper.instance();
        const id = 1;
        instance.markAsRead(id);
        expect(mockLog).toHaveBeenCalledWith(`Notification ${id} has been marked as read`);
    });
});
