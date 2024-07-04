import React from "react";
import CourseListRow from "./CourseListRow";
import CourseList from "./CourseList";
import { shallow } from "enzyme";


describe('CourseList components', () => {
    it('renders CourseList without crashing', () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders the 5 different rows', () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.find(CourseListRow)).toHaveLength(5);
    });
});
