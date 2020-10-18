export default abstract class AbstractPlugin {
  protected sw: ServiceWorkerGlobalScope;

  constructor() {
    this.sw = (self as unknown) as ServiceWorkerGlobalScope;
  }
}
