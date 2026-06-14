export type RepoTokenMap = Record<string, string>;
export declare function parseRepoTokensJson(raw: string): RepoTokenMap;
export declare function resolveStageToken(stageRepo: string | undefined, defaultRepo: string, githubToken: string, repoTokens: RepoTokenMap): string;
