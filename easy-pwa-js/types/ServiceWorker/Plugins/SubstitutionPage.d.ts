import AbstractPlugin from './AbstractPlugin';
export default class SubstitutionPage extends AbstractPlugin {
    private cacheKey;
    private substitutionFile;
    run(cacheKey: string, substitutionFile: string): void;
    private onInstalled;
    private onFetched;
}
