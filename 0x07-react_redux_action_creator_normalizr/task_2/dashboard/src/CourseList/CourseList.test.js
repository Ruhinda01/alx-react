import React from "react";
import CourseListRow from "./CourseListRow";
import CourseList from "./CourseList";
import { shallow } from "enzyme";
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('CourseList components', () => {
    it('renders CourseList without crashing', () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders the 3 different rows', () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.find(CourseListRow)).toHaveLength(3);
    });
});

describe('Testing CourseList when ListCourses is not empty', () => {
    let wrapper;
    const listCourses = [
        {id: 1, name: 'ES6', credit: 60},
        {id: 2, name: 'Webpack', credit: 20},
        {id: 3, name: 'React', credit: 40}
    ];
    beforeEach(() => {
        wrapper = shallow(<CourseList listCourses={listCourses} />);
    });

    it('renders 5 different rows', () => {
        expect(wrapper.find(CourseListRow)).toHaveLength(5);
    });
});