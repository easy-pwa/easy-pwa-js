import '../scss/base.scss';
declare const lib: {
    init: (userConfiguration: import("./Configuration/Configuration").default) => Promise<void>;
    isAppMode: () => boolean;
    getManifest: () => import("web-manifest-reader").WebManifest | null;
    isNotificationSupported: () => boolean;
    showNotification: (title: string, options: NotificationOptions) => Promise<void>;
    requestNotificationPermission: () => Promise<NotificationPermission>;
    firebase: () => import("./Push/FirebaseProvider").default | null;
};
export default lib;
