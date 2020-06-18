import React from 'react';
import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const showNotification = (type,message = '') => {
    if (type == 'success') {
        return NotificationManager.success(
            'success',
             message,
            3000
        );
    } else if (type == 'error') {
        return NotificationManager.error(
            'error',
            message,
            3000
        );
    }
};

export default showNotification;