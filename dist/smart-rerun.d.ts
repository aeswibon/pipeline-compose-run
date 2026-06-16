import { type RerunState } from '@aeswibon/pipeline-compose-core';
import type { GitHubActionsClient } from './github.js';
export declare function loadPreviousRerunState(client: GitHubActionsClient, currentRunId: number, runAttempt: number): Promise<RerunState | null>;
export declare function persistRerunState(state: RerunState): Promise<void>;
export declare function emptyRerunState(): RerunState;
