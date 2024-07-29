import uiReducer from './uiReducer';
import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN, LOGOUT, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions/uiActionTypes";


describe('uiReducer', () => {
    const initialState = {
        isNotificationDrawerVisible: false,
        isUserLoggedIn: false,
        user: {}
    };

    it('verify the state returned by the uiReducer function equals the initial state when no action is passed', () => {
        const state = uiReducer(undefined, {});
        expect(state).toEqual(initialState);
    });

    it('verify the state returned by the uiReducer function equals the initial state when the action SELECT_COURSE is passed', () => {
        const action = { type: 'SELECT_COURSE' };
        const state = uiReducer(initialState, action);
        expect(state).toEqual(initialState);
    });

    it('verify the state returned by the uiReduce function when the action DISPLAY_NOTIFICATION_DRAWER is passed and changes the state correctly', () => {
        const action = { type: DISPLAY_NOTIFICATION_DRAWER };
        const state = uiReducer(initialState, action);
        const expectedState = {
            ...initialState,
            isNotificationDrawerVisible: true
        }
        expect(state).toEqual(expectedState);
    });
});
