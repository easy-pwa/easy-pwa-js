declare function fetch(request: Request | string): Promise<Response>;
declare function skipWaiting(): void;

interface ExtendableEvent extends Event {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  waitUntil(data: Promise<any>): void;
}

interface FetchEvent extends ExtendableEvent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  respondWith(data: Promise<any>): void;
  readonly request: Request;
}
