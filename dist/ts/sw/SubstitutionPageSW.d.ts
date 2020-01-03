export default class SubstitutionPageSW {
    private readonly cacheKey;
    private readonly substitutionFile;
    constructor(cacheKey: string, substitutionFile: string);
    onInstalled(event: any): void;
    onFetched(event: any): void;
}
