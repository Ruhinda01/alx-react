import React, { component} from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import close from '../assets/close-icon.png';


class Notifications extends React.Component {
    constructor(props) {
        super(props);
        this.markAsRead = this.markAsRead.bind(this);
    }

    markAsRead(id){
        console.log(`Notification ${id} has been marked as read`);
    }

    render() {
        const { displayDrawer, listNotifications } = this.props;
        return (
            <>
                <div className='menuItem'>
                    Your notifications
                </div>
                { displayDrawer ?
                    <div className='Notifications'>
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
                        <p>Here is the list of notifications</p>
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
