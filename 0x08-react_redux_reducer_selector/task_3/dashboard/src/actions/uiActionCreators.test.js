import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from "./uiActionCreators";
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from "./uiActionTypes";

describe('uiActionCreators', () => {
    it('login', () => {
        expect(login('email', 'password')).toEqual({
            type: LOGIN,
            user: { email: 'email', password: 'password' }
        });
    });

    it('logout', () => {
        expect(logout()).toEqual({
            type: LOGOUT
        });
    });

    it('displayNotificationDrawer', () => {
        expect(displayNotificationDrawer()).toEqual({
            type: DISPLAY_NOTIFICATION_DRAWER
        });
    });

    it('hideNotificationDrawer', () => {
        expect(hideNotificationDrawer()).toEqual({
            type: HIDE_NOTIFICATION_DRAWER
        });
    });
});
