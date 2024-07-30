import { FETCH_COURSES_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from "../actions/courseActionTypes";

const courseReducer = (state = [], action) => {
    switch(action.type) {
        case FETCH_COURSES_SUCCESS:
            return action.data.map(course => ({
                ...course,
                isSelected: false
            }));
        case SELECT_COURSE:
            return state.map(course => {
                const current = {...course};
                if (current.id === action.index) {
                    current.isSelected = true;
                }
                return current;
            });
        case UNSELECT_COURSE:
            return state.map(course => {
                const current = {...course};
                if (current.id === action.index) {
                    current.isSelected = false;
                }
                return current;
            });
        default: return state;
    }
};

export default courseReducer;
