import { FirebaseApp } from '@firebase/app-types';
import { FirebaseMessaging } from '@firebase/messaging-types';

export class FirebaseAppMessaging extends FirebaseApp {
  messaging(): FirebaseMessaging;
}