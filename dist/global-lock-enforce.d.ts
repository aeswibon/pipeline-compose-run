import type { PipelineConcurrency } from '@aeswibon/pipeline-compose-core';
import type { GitHubActionsClient } from './github.js';
import { type RepoTokenMap } from './repo-tokens.js';
import type { GitHubAppTokenProvider } from './github-app.js';
export declare function acquireGlobalConcurrencyLock(baseClient: GitHubActionsClient, options: {
    concurrency: PipelineConcurrency;
    github: Record<string, unknown>;
    currentRunId: number;
    defaultOwner: string;
    defaultRepo: string;
    githubToken: string;
    repoTokens: RepoTokenMap;
    appTokenProvider?: GitHubAppTokenProvider;
    pollMs: number;
    timeoutMs: number;
}): Promise<{
    release: () => Promise<void>;
}>;
