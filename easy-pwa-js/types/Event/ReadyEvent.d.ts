export default class ReadyEvent extends CustomEvent<ReadyEvent> {
    static readonly EVENT_NAME = "easy-pwa-ready";
    constructor();
}
