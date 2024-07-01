import React from 'react';
import './Notifications.css';
import close from '../assets/close-icon.png';
import { getLastestNotification } from '../utils/utils';

function Notifications() {
    const handleClick = () => {
        console.log('Close button has been clicked');
    }

    return (
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
                onClick={handleClick}>
                    <img src={close} alt="close" width="10px" style={{ display: 'inline', marginTop: '5px', marginRight: '5px', padding: '0' }} />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <li data="default">New course available</li>
                <li data="urgent">New resume available</li>
                <li data="urgent" dangerouslySetInnerHTML={{ __html: getLastestNotification() }}></li>
            </ul>
        </div>
    );
}

export default Notifications;
