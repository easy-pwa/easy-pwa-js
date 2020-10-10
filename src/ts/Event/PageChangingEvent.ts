export default class PageChangingEvent extends CustomEvent<PageChangingEvent> {
  public static readonly EVENT_NAME = 'easy-pwa-page-changing';

  constructor() {
    super(PageChangingEvent.EVENT_NAME);
  }
}
