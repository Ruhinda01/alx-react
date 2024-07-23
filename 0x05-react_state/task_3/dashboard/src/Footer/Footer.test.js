import Footer from './Footer';
import React from 'react';
import { shallow } from 'enzyme';
import { getFullYear, getFooterCopy } from '../utils/utils';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('Footer components', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders the text Copyright', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.text()).toBe(`Copyright ${getFullYear()} - ${getFooterCopy()}`);
    });
});
