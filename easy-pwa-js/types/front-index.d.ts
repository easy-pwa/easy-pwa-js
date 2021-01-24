import '../scss/base.scss';
declare const lib: {
    init: (userConfiguration: import("./Configuration/Configuration").default) => Promise<void>;
    isAppMode: () => boolean;
    getManifest: () => import("web-manifest-reader").WebManifest | null;
    isNotificationSupported: () => boolean;
    hasNotificationPermission: () => boolean;
    requestNotificationPermission: () => Promise<NotificationPermission>;
};
export default lib;
