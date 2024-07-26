import * as notificationsData from '../../notifications.json';


const getAllNotificationsByUser = (userId) => {
    return notificationsData
        .filter((notification) => notification.author.id === userId)
        .map((notification) => notification.context);
}

export default getAllNotificationsByUser;
