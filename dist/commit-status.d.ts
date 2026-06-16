import type { PipelineStage } from '@aeswibon/pipeline-compose-core';
import type { GitHubActionsClient } from './github.js';
export type CommitStatusMode = 'auto' | 'true' | 'false';
export type CommitStatusState = 'pending' | 'success' | 'failure' | 'error';
export declare function parseCommitStatusMode(raw: string): CommitStatusMode;
export declare function shouldReportCommitStatus(mode: CommitStatusMode, eventName: string): boolean;
export declare function resolveCommitStatusSha(event: Record<string, unknown>, options: {
    explicitSha?: string;
    envSha?: string;
}): string | null;
export declare class CommitStatusReporter {
    private readonly client;
    private readonly sha;
    private readonly pipelineName;
    constructor(client: GitHubActionsClient, sha: string, pipelineName: string);
    private post;
    pipelinePending(): Promise<void>;
    pipelineComplete(success: boolean, summary: string): Promise<void>;
    stagePending(stage: PipelineStage): Promise<void>;
    stageSkipped(stage: PipelineStage, reason: string): Promise<void>;
    stageSuccess(stage: PipelineStage, owner: string, repo: string, runId: number, reused?: boolean): Promise<void>;
    stageFailure(stage: PipelineStage, message: string): Promise<void>;
}
