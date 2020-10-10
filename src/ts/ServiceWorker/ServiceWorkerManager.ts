import PluginManager from './Plugins/PluginManager';

export default class ServiceWorkerManager {
  protected sw: ServiceWorkerGlobalScope;

  public plugins: PluginManager;

  constructor() {
    this.plugins = new PluginManager();
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
