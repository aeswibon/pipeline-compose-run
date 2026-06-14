import type { Pipeline } from '@aeswibon/pipeline-compose-core';
import type { GitHubActionsClient } from './github.js';
export type OrchestratorOptions = {
    ref: string;
    github: Record<string, unknown>;
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
