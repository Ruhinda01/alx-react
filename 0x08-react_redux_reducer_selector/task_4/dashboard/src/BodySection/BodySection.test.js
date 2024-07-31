import React from "react";
import { shallow } from "enzyme";
import BodySection from "./BodySection";


describe('BodySection component', () => {
    it('renders children and h2 element', () => {
        const wrapper = shallow(<BodySection title="test title"><p>test children node</p></BodySection>);
        expect(wrapper.find('h2').text()).toBe('test title');
        expect(wrapper.find('h2').length).toBe(1);
        expect(wrapper.find('p').length).toBe(1);
        expect(wrapper.find('p').text()).toBe('test children node');
    });
});
