import PageSubstitutionPlugin from './Plugins/SubstitutionPage';

export default class ServiceWorkerManager {
  constructor() {
    this.initSkipWaiting();
  }

  private initSkipWaiting(): void {
    self.addEventListener('message', (messageEvent): void => {
      if (messageEvent.data === 'skipWaiting') {
        skipWaiting();
      }
    });
  }

  public pageSubstitutionPlugin(): PageSubstitutionPlugin {
    return new PageSubstitutionPlugin();
  }
}
