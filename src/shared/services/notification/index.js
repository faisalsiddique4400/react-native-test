import React from 'react';
import PushNotification from 'react-native-push-notification';

const useNotifications = () => {
    React.useEffect(() => {
        // Configure the push notification settings
        PushNotification.configure({
            onRegister: function (token) {
                console.log('TOKEN:', token);
            },
            onNotification: function (notification) {
                console.log('NOTIFICATION:', notification);
            },
            popInitialNotification: true,
            requestPermissions: false,
        });

        PushNotification.createChannel(
            {
                channelId: 'reminders',
                channelName: 'Task reminder notifications',
                channelDescription: 'Reminder for any tasks',
            },
            (created) => console.log(`createChannel returned '${created}'`)
        );

        // Fetch scheduled notifications
        PushNotification.getScheduledLocalNotifications((rn) => {
            console.log('Scheduled Notifications: ', rn);
        });
    }, []);

    // Function to schedule a notification
    const scheduleNotification = (date, message) => {
        PushNotification.localNotificationSchedule({
            channelId: 'reminders',
            title: 'Reminder!',
            message: message,
            date,
        });
    };

    return { scheduleNotification };
};

export default useNotifications;
