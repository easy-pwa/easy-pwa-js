declare function fetch(request: Request | string): Promise<Response>;
declare function skipWaiting(): void;

interface ExtendableEvent {
  waitUntil: promise;
}

interface FetchEvent extends ExtendableEvent {
  respondWith: promise;
}

interface InstallEvent extends ExtendableEvent {
  activeWorker: ServiceWorkerRegistration;
}
