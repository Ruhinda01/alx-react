import React from 'react';
import NotificationItem from './NotificationItem';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';


beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

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

describe('NotificationItem when markAsRead is called', () => {
    it('calls the markAsRead function with the right ID argument when clicked', () => {
        const spy = jest.fn();
        const wrapper = shallow(<NotificationItem markAsRead={spy} id={1} />);
        wrapper.find('li').simulate('click');
        expect(spy).toHaveBeenCalledWith(1);
    });
    afterEach(() => {
        jest.restoreAllMocks();
    }); 
});
