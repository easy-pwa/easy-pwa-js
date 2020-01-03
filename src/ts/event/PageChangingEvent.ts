import AbstractEvent from './AbstractEvent';

export default class PageChangingEvent extends AbstractEvent {
  public static readonly EVENT_NAME = 'easy-pwa-page-changing';
}
