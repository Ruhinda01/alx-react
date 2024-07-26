import * as notificationsData from '../../dist/notifications.json';
import { schema, normalize } from 'normalizr';


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

const getAllNotificationsByUser = (userId) => {
    const notifications = normalizedData.entities.notifications;
    const messages = normalizedData.entities.messages;

    const output = [];
    for (const id in notifications) {
        if (notifications[id].author === userId) {
            output.push(messages[notifications[id].context]);
        }
    }

    return output;
};

export default {getAllNotificationsByUser, normalizedData};
