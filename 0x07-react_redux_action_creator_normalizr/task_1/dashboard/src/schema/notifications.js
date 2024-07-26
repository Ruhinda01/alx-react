import * as notificationsData from '../../notifications.json';
import { schema, normalize } from 'normalizr';


const getAllNotificationsByUser = (userId) => {
    return notificationsData
        .filter((notification) => notification.author.id === userId)
        .map((notification) => notification.context);
}

const user = new schema.Entity('users');
const message = new schema.Entity(
    'messages',
    {},
    {
        idAttribute: 'guid'
    }
);
const notification = new schema.Entity('notifications', {
    author: user,
    context: message
});

const normalizedData = normalize(notificationsData, [notification]);

export default {getAllNotificationsByUser, normalizedData};
