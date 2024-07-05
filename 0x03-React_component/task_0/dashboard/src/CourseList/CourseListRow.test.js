import CourseListRow from "./CourseListRow";
import { shallow } from 'enzyme';
import React from 'react';


describe('CourseListRow components', () => {
    it('renders one cell with colspan 2 if isHeader is true', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" />);
        expect(wrapper.find('tr').children()).toHaveLength(1);
        expect(wrapper.find('tr').childAt(0).html()).toEqual('<th colSpan="2">test</th>');
    });

    it('renders two cells when textSecondCell is present', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" textSecondCell="test2" />)
        expect(wrapper.find('tr').children()).toHaveLength(2);
        expect(wrapper.find('tr').childAt(0).html()).toEqual('<th>test</th>');
        expect(wrapper.find('tr').childAt(1).html()).toEqual('<th>test2</th>');
    })

    it('renders two cells when textSecondCell is present if isHeader is false', () => {
        const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="test" textSecondCell="test2" />);
        expect(wrapper.find('tr').children()).toHaveLength(2);
        expect(wrapper.find('tr').childAt(0).html()).toEqual('<td>test</td>');
        expect(wrapper.find('tr').childAt(1).html()).toEqual('<td>test2</td>');
    });
});
