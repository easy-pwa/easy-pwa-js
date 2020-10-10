export default class ReadyEvent extends CustomEvent<ReadyEvent> {
  public static readonly EVENT_NAME = 'easy-pwa-ready';

  constructor() {
    super(ReadyEvent.EVENT_NAME);
  }
}
