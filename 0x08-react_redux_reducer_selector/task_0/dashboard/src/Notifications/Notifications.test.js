import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';
import { shallow, mount } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import React from 'react';


beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

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
        expect(wrapper.find(NotificationItem).first().html()).toBe('<li data-notification-type="default" class="default_1tsdo2i-o_O-small_1xo48ry">No new notification for now</li>');
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

    it('renders the menu item when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications displayDrawer={false} />);
        expect(wrapper.find('.menuItem')).toHaveLength(1);
        expect(wrapper.find('.menuItem').text()).toBe('Your notifications');
    });

    it('checks that the div.Notifications is not being displayed when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications displayDrawer={false} />);
        expect(wrapper.find('.Notifications')).toHaveLength(0);
    });

    it('checks that the div.Notifications is being displayed when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find('.Notifications')).toHaveLength(1);
    });

    it('checks that the menu item is being displayed when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find('.menuItem')).toHaveLength(1);
        expect(wrapper.find('.menuItem').text()).toBe('Your notifications');
    });
});

describe('Testing Notification when displayDrawer is true and listNotifications contains 3 items', () => {
    let wrapper;
    const listNotifications = [
        {id: 1, type: 'default', value: 'New course available'},
        {id: 2, type: 'urgent', value: 'New resume available'},
        {id: 3, type: 'urgent', html: {__html: getLatestNotification()}},
      ];
    beforeEach(() => {
        wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    });

    it('renders 3 NotificationItem', () => {
        expect(wrapper.find(NotificationItem)).toHaveLength(3);
        expect(wrapper.find(NotificationItem).first().html()).toBe('<li data-notification-type="default" class="default_1tsdo2i-o_O-small_1xo48ry">New course available</li>');
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


describe('Testing that the Notifications component does not rerender when receiving the same props', () => {
    let wrapper;
    const listNotifications = [
        {id: 1, type: 'default', value: 'New course available'},
        {id: 2, type: 'urgent', value: 'New resume available'},
        {id: 3, type: 'urgent', html: {__html: getLatestNotification()}},
      ];
    beforeEach(() => {
        wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    });

    it('does not rerender when receiving the same props', () => {
        const prevProps = wrapper.instance().props;
        wrapper.setProps({...prevProps});
        expect(wrapper.instance().shouldComponentUpdate(prevProps)).toBe(false);
    });
});

describe('Testing that the Notifications component rerenders when receiving a longer list', () => {
    it('rerenders when receiving a longer list', () => {
        const initialList = [
            { id: 1, type: 'default', value: 'Notification 1' },
            { id: 2, type: 'urgent', value: 'Notification 2' },
        ];
        const longerList = [
            ...initialList,
            { id: 3, type: 'urgent', value: 'Notification 3' },
        ];
        const handleDisplayDrawer = jest.fn();
        const handleHideDrawer = jest.fn();
        const wrapper = shallow(<Notifications
            displayDrawer={true}
            listNotifications={initialList}
            handleDisplayDrawer={handleDisplayDrawer}
            handleHideDrawer={handleHideDrawer}
             />);
        const shouldUpdateSpy = jest.spyOn(wrapper.instance(), 'shouldComponentUpdate');
        wrapper.setProps({ listNotifications: longerList });
        expect(shouldUpdateSpy).toHaveBeenCalledWith(
            {
                displayDrawer: true,
                listNotifications: longerList,
                handleDisplayDrawer: handleDisplayDrawer,
                handleHideDrawer: handleHideDrawer
            },
                {},
                {}
        );
        shouldUpdateSpy.mockRestore();
    });
});

describe('Testing props', () => {
    it('verifies that clicking on the menu item call handleDisplayDrawer', () => {
        const drawer = jest.fn();
        const wrapper = shallow(<Notifications displayDrawer={false} handleDisplayDrawer={drawer} />);
        wrapper.find('.menuItem').simulate('click');
        expect(drawer).toHaveBeenCalled();
    });

    it('verifies that clicking on the close button calls handleHideDrawer', () => {
        const closer = jest.fn();
        const wrapper = shallow(<Notifications displayDrawer={true} handleHideDrawer={closer} />);
        wrapper.find('.Notifications button').simulate('click');
        expect(closer).toHaveBeenCalled();
    });
});
