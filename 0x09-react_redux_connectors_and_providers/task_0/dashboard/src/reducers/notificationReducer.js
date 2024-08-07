import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from "../actions/notificationActionTypes";
import { Map } from 'immutable';
import { notificationsNormalizer } from "../schema/notifications";


export const initialState = {
    notifications: [],
    filter: NotificationTypeFilters.DEFAULT
};

const notificationReducer = (state = Map(initialState), action) => {
    switch(action.type) {
        case FETCH_NOTIFICATIONS_SUCCESS:
            const normalizedData = notificationsNormalizer(action.data);
            Object.keys(normalizedData).forEach((key) => {
                normalizedData.notifications[key].isRead = false;
            });
            return state.merge(normalizedData);
        case MARK_AS_READ:
            return state.setIn(['notifications', String(action.index), 'isRead'], true);
        case SET_TYPE_FILTER:
            return state.set('filter', action.filter);
        default: return state;
    }
};

export default notificationReducer;
