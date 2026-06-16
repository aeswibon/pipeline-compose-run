export declare class GitHubAppTokenProvider {
    private readonly appId;
    private readonly privateKeyPem;
    private readonly apiUrl;
    private readonly cache;
    constructor(appId: string, privateKeyPem: string, apiUrl?: string);
    private appJwt;
    tokenForRepo(owner: string, repo: string): Promise<string>;
}
