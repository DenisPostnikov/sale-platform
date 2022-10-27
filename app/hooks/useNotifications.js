import { useEffect } from 'react';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import expoPushTokensApi from "../api/expoPushTokens";

export default function useNotifications(notificationListener) {
  useEffect(() => {
    registerForPushNotifications();

    if (notificationListener) Notifications.addNotificationReceivedListener(notificationListener);
  }, []);

  const registerForPushNotifications = async () => {
    try {
      const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (!permission.granted) return;

      const { data: token } = await Notifications.getExpoPushTokenAsync();
      const res = await expoPushTokensApi.register(token);
    } catch (e) {
      console.log('Error getting a push token', e)
    }
  }
}
