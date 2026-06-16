import type { PipelineConcurrency } from '@aeswibon/pipeline-compose-core';
import type { GitHubActionsClient } from './github.js';
export declare function enforcePipelineConcurrency(client: GitHubActionsClient, options: {
    currentRunId: number;
    ref: string;
    concurrency: PipelineConcurrency;
    github: Record<string, unknown>;
    pollMs: number;
    timeoutMs: number;
}): Promise<void>;
