import AbstractEvent from "./AbstractEvent";

export default class ReadyEvent extends AbstractEvent {
  public static readonly EVENT_NAME = 'easy-pwa-ready';
}
