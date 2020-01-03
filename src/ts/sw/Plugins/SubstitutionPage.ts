export default class SubstitutionPage {
  private cacheKey: string;

  private substitutionFile: string;

  run(cacheKey: string, substitutionFile: string): void {
    this.cacheKey = cacheKey;
    this.substitutionFile = substitutionFile;

    self.addEventListener('install', this.onInstalled);
    self.addEventListener('fetch', this.onFetched);
  }

  private onInstalled(event: InstallEvent): void {
    event.waitUntil(
      caches.open(this.cacheKey).then(cache => {
        return cache.addAll([this.substitutionFile]);
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
