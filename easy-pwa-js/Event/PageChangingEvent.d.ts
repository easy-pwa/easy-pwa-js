import AbstractEvent from './AbstractEvent';
export default class PageChangingEvent extends AbstractEvent {
    static readonly EVENT_NAME = "easy-pwa-page-changing";
}
