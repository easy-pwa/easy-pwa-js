import { FirebaseApp } from '@firebase/app-types';
import { FirebaseMessaging } from '@firebase/messaging-types';

export default class FirebaseAppMessaging extends FirebaseApp {
  messaging(): FirebaseMessaging;
}
