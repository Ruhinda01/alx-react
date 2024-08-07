import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSES_SUCCESS } from "./courseActionTypes";

export const selectCourse = (index) => {
    return {
        type: SELECT_COURSE,
        index
    };
};

export const boundSelectCourse = (index) => (dispatch) => {
    dispatch(selectCourse(index));
};


export const unselectCourse = (index) => {
    return {
        type: UNSELECT_COURSE,
        index
    };
};

export const boundUnselectCourse = (index) => (dispatch) => {
    dispatch(unselectCourse(index));
};

export const fetchCoursesSuccess = (data) => {
    return {
        type: FETCH_COURSES_SUCCESS,
        data
    };
}
