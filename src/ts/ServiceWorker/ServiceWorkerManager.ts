export default class ServiceWorkerManager {
  protected sw: ServiceWorkerGlobalScope;

  constructor() {
    this.sw = (self as unknown) as ServiceWorkerGlobalScope;
    this.initSkipWaiting();
  }

  private initSkipWaiting(): void {
    this.sw.addEventListener('message', (messageEvent): void => {
      if (messageEvent.data === 'skipWaiting') {
        skipWaiting();
      }
    });
  }
}
