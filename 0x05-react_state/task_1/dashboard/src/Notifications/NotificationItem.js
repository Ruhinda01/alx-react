import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';


const styles = StyleSheet.create({
    default: {
        color: 'blue',
    },

    small: {
        '@media (max-width: 900px)': {
            fontSize: '20px',
            width: '100%',
            borderBottom: 'solid 2px black',
            padding: '10px 8px',
            listStyle: 'none'
        }
    },

    urgent: {
        color: 'red',
    }
});


class NotificationItem extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        let classProp;
        const { type, value, html, markAsRead, id } = this.props;
        {type === 'default' ? classProp = styles.default : classProp = styles.urgent}
        return (
            value ?
            <li data-notification-type={type} onClick={() => markAsRead(id)} className={css([classProp, styles.small])}>{value}</li> :
            <li className={css([classProp, styles.small])} data-notification-type={type} dangerouslySetInnerHTML={html} onClick={() => markAsRead(id)}></li>
        );
    }
}

NotificationItem.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    html: PropTypes.shape({
        __html: PropTypes.string
    }),
    markAsRead: PropTypes.func,
    id: PropTypes.number
};

NotificationItem.defaultProps = {
    type: 'default',
    markAsRead: () => {
        console.log("empty function");
    },
    id: 0
};

export default NotificationItem;
