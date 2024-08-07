import { initialState, notificationReducer } from "./notificationReducer";
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from "../actions/notificationActionTypes";
import { Map, fromJS } from 'immutable';


describe('notificationReducer', () => {
    it('should return the initial state', () => {
        expect(notificationReducer(undefined, {})).toEqual(Map(initialState));
    });

    it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
        const action = {
            type: FETCH_NOTIFICATIONS_SUCCESS,
            data: [
              {
                id: 1,
                type: "default",
                value: "New course available"
              },
              {
                id: 2,
                type: "urgent",
                value: "New resume available"
              },
              {
                id: 3,
                type: "urgent",
                value: "New data available"
              }
            ]
        };

        const expectedData = {
            filter: "DEFAULT",
            notifications: [
              {
                id: 1,
                isRead: false,
                type: "default",
                value: "New course available"
              },
              {
                id: 2,
                isRead: false,
                type: "urgent",
                value: "New resume available"
              },
              {
                id: 3,
                isRead: false,
                type: "urgent",
                value: "New data available"
              }
            ]
        };

        expect(notificationReducer(undefined, action)).toEqual(expectedData);
    });

    it('should handle MARK_AS_READ', () => {
        const startState = {
            filter: "DEFAULT",
            notifications: [
                {
                    id: 1,
                    isRead: false,
                    type: "default",
                    value: "New course available"
                },
                {
                    id: 2,
                    isRead: false,
                    type: "urgent",
                    value: "New resume available"
                },
                {
                    id: 3,
                    isRead: false,
                    type: "urgent",
                    value: "New data available"
                }
            ]
        };

        const action = {
            type: MARK_AS_READ,
            index: 2
        };

        const expectedData = {
            filter: "DEFAULT",
            notifications: [
                {
                    id: 1,
                    isRead: false,
                    type: "default",
                    value: "New course available"
                },
                {
                    id: 2,
                    isRead: true,
                    type: "urgent",
                    value: "New resume available"
                },
                {
                    id: 3,
                    isRead: false,
                    type: "urgent",
                    value: "New data available"
                }
            ]
        };

        expect(notificationReducer(startState, action)).toEqual(expectedData);
    });

    it('should handle SET_TYPE_FILTER', () => {
        const startState = {
            filter: "DEFAULT",
            notifications: [
                {
                    id: 1,
                    isRead: false,
                    type: "default",
                    value: "New course available"
                },
                {
                    id: 2,
                    isRead: false,
                    type: "urgent",
                    value: "New resume available"
                },
                {
                    id: 3,
                    isRead: false,
                    type: "urgent",
                    value: "New data available"
                }
            ]
        };

        const action = {
            type: SET_TYPE_FILTER,
            filter: "URGENT"
        };

        const expectedData = {
            filter: "URGENT",
            notifications: [
                {
                    id: 1,
                    isRead: false,
                    type: "default",
                    value: "New course available"
                },
                {
                    id: 2,
                    isRead: false,
                    type: "urgent",
                    value: "New resume available"
                },
                {
                    id: 3,
                    isRead: false,
                    type: "urgent",
                    value: "New data available"
                }
            ]
        };
        expect(notificationReducer(startState, action)).toEqual(expectedData);
    });
});
