import { FETCH_COURSES_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from "../actions/courseActionTypes";
import { Map } from 'immutable';
import { coursesNormalizer } from "../schema/courses";


const initialState = [];

const courseReducer = (state = Map(initialState), action) => {
    switch(action.type) {
        case FETCH_COURSES_SUCCESS:
            const normalizedData = coursesNormalizer(action.data);
            Object.keys(normalizedData).forEach((key) => {
                normalizedData[key].isSelected = false;
            });
            return state.merge(normalizedData)
        case SELECT_COURSE:
            return state.setIn([String(action.index), 'isSelected'], true);
        case UNSELECT_COURSE:
            return state.setIn([String(action.index), 'isSelected'], false);
        default: return state;
    }
};

export default courseReducer;
