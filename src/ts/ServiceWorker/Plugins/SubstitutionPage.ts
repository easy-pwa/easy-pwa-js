import AbstractPlugin from './AbstractPlugin';

export default class SubstitutionPage extends AbstractPlugin {
  private cacheKey!: string;

  private substitutionFile!: string;

  public run(cacheKey: string, substitutionFile: string): void {
    this.cacheKey = cacheKey;
    this.substitutionFile = substitutionFile;

    this.sw.addEventListener('install', this.onInstalled.bind(this));
    this.sw.addEventListener('fetch', this.onFetched.bind(this));
  }

  private onInstalled(event: ExtendableEvent): void {
    event.waitUntil(
      caches.open(this.cacheKey).then(cache => {
        return cache.add(this.substitutionFile);
      })
    );
  }

  private onFetched(event: FetchEvent): void {
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.match(this.substitutionFile);
      })
    );
  }
}
