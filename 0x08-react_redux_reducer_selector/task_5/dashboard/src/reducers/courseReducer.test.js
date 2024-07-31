import courseReducer from "./courseReducer";
import { FETCH_COURSES_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from "../actions/courseActionTypes";

describe("courseReducer", () => {
    it('test the default state returns an empty array', () => {
        const state = courseReducer(undefined, {});
        expect(state).toEqual([]);
    });

    it('test that FETCH_COURSES_SUCCESS returns data passed', () => {
        const action = {
            type: FETCH_COURSES_SUCCESS,
            data: [
                {
                  id: 1,
                  name: "ES6",
                  credit: 60
                },
                {
                  id: 2,
                  name: "Webpack",
                  credit: 20
                },
                {
                  id: 3,
                  name: "React",
                  credit: 40
                }
            ]
        };

        const state = courseReducer([], action);
        expect(state).toEqual([
            {
              id: 1,
              name: "ES6",
              isSelected: false,
              credit: 60
            },
            {
              id: 2,
              name: "Webpack",
              isSelected: false,
              credit: 20
            },
            {
              id: 3,
              name: "React",
              isSelected: false,
              credit: 40
            }
        ]);
    });

    it('test that SELECT_COURSE returns data with the right item updated', () => {
        const action = {
            type: SELECT_COURSE,
            index: 2
        };

        const initialState = [
            {
                id: 1,
                name: "ES6",
                isSelected: false,
                credit: 60
            },
            {
                id: 2,
                name: "Webpack",
                isSelected: false,
                credit: 20
            },
            {
                id: 3,
                name: "React",
                isSelected: false,
                credit: 40
            }
        ];

        const expectedState = [
            {
              id: 1,
              name: "ES6",
              isSelected: false,
              credit: 60
            },
            {
              id: 2,
              name: "Webpack",
              isSelected: true,
              credit: 20
            },
            {
              id: 3,
              name: "React",
              isSelected: false,
              credit: 40
            }
        ];

        const state = courseReducer(initialState, action);

        expect(state).toEqual(expectedState);
    });

    it('test that UNSELECT_COURSE returns data with the right item updated', () => {
        const action = {
            type: UNSELECT_COURSE,
            index: 2
        };

        const initialState = [
            {
                id: 1,
                name: "ES6",
                isSelected: false,
                credit: 60
            },
            {
                id: 2,
                name: "Webpack",
                isSelected: true,
                credit: 20
            },
            {
                id: 3,
                name: "React",
                isSelected: false,
                credit: 40
            }
        ];

        const expectedState = [
            {
              id: 1,
              name: "ES6",
              isSelected: false,
              credit: 60
            },
            {
              id: 2,
              name: "Webpack",
              isSelected: false,
              credit: 20
            },
            {
              id: 3,
              name: "React",
              isSelected: false,
              credit: 40
            }
        ];

        const state = courseReducer(initialState, action);

        expect(state).toEqual(expectedState);
    });
});
