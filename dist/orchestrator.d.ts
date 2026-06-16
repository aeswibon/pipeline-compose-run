import type { Pipeline } from '@aeswibon/pipeline-compose-core';
import { type CommitStatusReporter } from './commit-status.js';
import { GitHubAppTokenProvider } from './github-app.js';
import { type RepoTokenMap } from './repo-tokens.js';
import { GitHubActionsClient } from './github.js';
export type OrchestratorOptions = {
    ref: string;
    github: Record<string, unknown>;
    defaultOwner: string;
    defaultRepo: string;
    githubToken: string;
    repoTokens: RepoTokenMap;
    appTokenProvider?: GitHubAppTokenProvider;
    /** Parent workflow run id (GITHUB_RUN_ID) for concurrency enforcement. */
    currentRunId?: number;
    /** Reuse prior attempt outputs when stage inputs are unchanged. */
    smartRerun?: boolean;
    /** GITHUB_RUN_ATTEMPT (1 on first run). */
    runAttempt?: number;
    repoRoot?: string;
    /** Inputs forwarded from a parent sub-pipeline stage. */
    subPipelineInputs?: Record<string, string>;
    /** Optional PR commit status reporter (entry repo). */
    commitStatus?: CommitStatusReporter;
    timeoutMs?: number;
    pollMs?: number;
};
export type StageResult = {
    stageId: string;
    runId: number;
    outputs: Record<string, string>;
    skipped?: boolean;
    reused?: boolean;
    /** Prior run duration when smart rerun skipped re-dispatch. */
    savedSeconds?: number;
};
export declare function runPipeline(pipeline: Pipeline, client: GitHubActionsClient, options: OrchestratorOptions): Promise<StageResult[]>;
