interface FirebaseAppMessaging extends FirebaseApp {
  messaging(): FirebaseMessaging;
}

interface FirebasePayloadMessage {
  readonly notification: FirebasePayloadMessageNotification;
}

interface FirebasePayloadMessageNotification extends NotificationOptions {
  readonly title: string;
}
