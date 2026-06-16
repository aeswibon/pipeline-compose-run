import type { Pipeline } from '@aeswibon/pipeline-compose-core';
import { type RepoTokenMap } from './repo-tokens.js';
import { GitHubActionsClient } from './github.js';
export type OrchestratorOptions = {
    ref: string;
    github: Record<string, unknown>;
    defaultOwner: string;
    defaultRepo: string;
    githubToken: string;
    repoTokens: RepoTokenMap;
    /** Parent workflow run id (GITHUB_RUN_ID) for concurrency enforcement. */
    currentRunId?: number;
    timeoutMs?: number;
    pollMs?: number;
};
export type StageResult = {
    stageId: string;
    runId: number;
    outputs: Record<string, string>;
    skipped?: boolean;
};
export declare function runPipeline(pipeline: Pipeline, client: GitHubActionsClient, options: OrchestratorOptions): Promise<StageResult[]>;
