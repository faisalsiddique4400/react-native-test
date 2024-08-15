import { PermissionsAndroid, Platform } from "react-native";
import { IS_ANDROID, IS_IOS } from "../themes";
import PushNotificationIOS from "@react-native-community/push-notification-ios";

export const requestNotificationPermission = async () => {
    try {
        if (IS_ANDROID && Platform.Version >= 33) {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
            );
        } else if (IS_IOS
        ) {
            const data = await PushNotificationIOS.requestPermissions({
                alert: true,
                badge: true,
                sound: true,
                critical: true,
            });
        }
    } catch (error) {
        return error
    }
};
