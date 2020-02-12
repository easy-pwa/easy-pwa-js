export default class SubstitutionPage {
  private cacheKey?: string;

  private substitutionFile?: string;

  public run(cacheKey: string, substitutionFile: string): void {
    this.cacheKey = cacheKey;
    this.substitutionFile = substitutionFile;

    self.addEventListener('install', this.onInstalled.bind(this));
    self.addEventListener('fetch', this.onFetched.bind(this));
  }

  private onInstalled(event: InstallEvent): void {
    event.waitUntil(
      caches.open(this.cacheKey).then(cache => {
        return cache.add(this.substitutionFile);
      }),
    );
  }

  private onFetched(event: FetchEvent): void {
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.match(this.substitutionFile);
      }),
    );
  }
}
