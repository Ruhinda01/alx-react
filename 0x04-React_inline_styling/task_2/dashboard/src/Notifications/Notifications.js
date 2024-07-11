import React, { component} from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import close from '../assets/close-icon.png';


const styles = StyleSheet.create({
    Notifications: {
        border: '3px dashed red',
        padding: '5rem',
        paddingBottom: '2rem',
        position: 'absolute',
        top: '3rem',
        right: '1rem',
    },

    menuItem: {
        position: 'absolute',
        top: '0rem',
        right: '1rem',
    },

    NotificationsP: {
        marginBottom: '25px',
        position: 'absolute',
        top: '3rem',
        left: '1rem',
    },
});


class Notifications extends React.Component {
    constructor(props) {
        super(props);
        this.markAsRead = this.markAsRead.bind(this);
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.listNotifications.length > this.props.listNotifications.length;
    }

    markAsRead(id){
        console.log(`Notification ${id} has been marked as read`);
    }

    render() {
        const { displayDrawer, listNotifications } = this.props;
        return (
            <>
                <div className={`menuItem ${css(styles.menuItem)}`}>
                    Your notifications
                </div>
                { displayDrawer ?
                    <div className={`Notifications ${css(styles.Notifications)}`}>
                        <button
                            style={{
                                position: 'absolute',
                                top: '15px',
                                right: '15px',
                                border: 'none',
                                background: 'none',
                                cursor: 'pointer',
                            }}
                            aria-label="Close"
                            onClick={() => console.log('Close button has been clicked')}>
                                <img src={close} alt="close" width="10px" style={{ display: 'inline', marginTop: '5px', marginRight: '5px', padding: '0' }} />
                        </button>
                        <p className={css(styles.NotificationsP)}>Here is the list of notifications</p>
                        <ul>
                            { listNotifications.length === 0 ? <NotificationItem value='No new notification for now' /> :
                                listNotifications.map((notification) =>
                                <NotificationItem key={notification.id} type={notification.type} value={notification.value} html={notification.html} markAsRead={this.markAsRead} id={notification.id} />) }
                        </ul>
                    </div>
                    : null
                }
            </>
        );
    }
}



Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
}

export default Notifications;
