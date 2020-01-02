import AbstractEvent from "./AbstractEvent";
export default class ReadyEvent extends AbstractEvent {
    static readonly EVENT_NAME = "easy-pwa-ready";
}
