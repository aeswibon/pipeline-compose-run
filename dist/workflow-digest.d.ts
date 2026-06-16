import type { GitHubActionsClient } from './github.js';
export declare function contentDigest(content: string): string;
export declare function workflowFileDigest(repoRoot: string, workflowPath: string): string | undefined;
export declare function workflowRemoteDigest(client: GitHubActionsClient, workflowPath: string, ref: string): Promise<string | undefined>;
