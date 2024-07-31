import uiReducer from './uiReducer';
import { Map } from 'immutable';
import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN, LOGOUT, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions/uiActionTypes";


describe('uiReducer', () => {
    const initialState = Map({
        isNotificationDrawerVisible: false,
        isUserLoggedIn: false,
        user: Map({})
    });

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
        const expectedState = initialState.set('isNotificationDrawerVisible', true);
        expect(state).toEqual(expectedState);
    });

    it('verify the state returned by the uiReduce function when the action HIDE_NOTIFICATION_DRAWER is passed and changes the state correctly', () => {
        const action = { type: HIDE_NOTIFICATION_DRAWER };
        const state = uiReducer(initialState, action);
        const expectedState = initialState.set('isNotificationDrawerVisible', false);
        expect(state).toEqual(expectedState);
    });

    it('verify the state returned by the uiReduce function when the action LOGIN_SUCCESS is passed and changes the state correctly', () => {
        const action = { type: LOGIN_SUCCESS };
        const state = uiReducer(initialState, action);
        const expectedState = initialState.set('isUserLoggedIn', true);
        expect(state).toEqual(expectedState);
    });

    it('verify the state returned by the uiReduce function when the action LOGIN_FAILURE is passed and changes the state correctly', () => {
        const action = { type: LOGIN_FAILURE };
        const state = uiReducer(initialState, action);
        const expectedState = initialState.set('isUserLoggedIn', false);
        expect(state).toEqual(expectedState);
    });

    it('verify the state returned by the uiReduce function when the action LOGOUT is passed and changes the state correctly', () => {
        const action = { type: LOGOUT };
        const state = uiReducer(initialState, action);
        const expectedState = initialState.set('isUserLoggedIn', false);
        expect(state).toEqual(expectedState);
    });
});
