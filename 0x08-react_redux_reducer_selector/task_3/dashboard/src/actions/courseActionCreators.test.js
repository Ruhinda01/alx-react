import { selectCourse, unselectCourse } from "./courseActionCreators";
import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";


describe('CourseActionCreators', () => {
    it('selectCourse', () => {
        const action = selectCourse(1);
        expect(action).toEqual({
            type: SELECT_COURSE,
            index: 1
        });
    });

    it('unselectCourse', () => {
        const action = unselectCourse(1);
        expect(action).toEqual({
            type: UNSELECT_COURSE,
            index: 1
        });
    });
});
