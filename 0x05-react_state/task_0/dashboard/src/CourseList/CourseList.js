import React from "react";
import PropTypes from "prop-types";
import CourseListRow from "./CourseListRow";
import CourseShape from "./CourseShape";
import { StyleSheet, css } from 'aphrodite';


function CourseList({ listCourses }) {
    return (
        <table id="CourseList" className={css([styles.table, styles.th, styles.tr])}>
            <thead className={css(styles.thead)}>
                <CourseListRow isHeader={true} textFirstCell="Available courses" />
                <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
            </thead>
            <tbody>
                { listCourses.length === 0 ? <CourseListRow isHeader={false} textFirstCell="No course available yet" /> :
                    listCourses.map((course) => <CourseListRow isHeader={false} textFirstCell={course.name} textSecondCell={course.credit} key={course.id} />) }
            </tbody>
        </table>
    );
}

const styles = StyleSheet.create({
    table: {
        border: "solid 2px rgb(189, 187, 187)",
        width: "100%",
        textAlign: "start"
    },

    thead: {
        borderBottom: "solid 2px rgb(189, 187, 187)",
        textAlign: "start"
    },

    tr: {
        borderBottom: "solid 2px rgb(189, 187, 187)",
        textAlign: "start"
    },

    th: {
        borderBottom: "solid 2px rgb(189, 187, 187)",
        textAlign: "start"
    },

    ':nth-child(1n) > thead': {
        textAlign: "center"
    }
});

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
    listCourses: [],
}

export default CourseList;
