export type WorkflowSummary = {
    id: number;
    path: string;
    name: string;
};
export type WorkflowRun = {
    id: number;
    status: string;
    conclusion: string | null;
    created_at: string;
    head_branch: string | null;
    head_sha?: string | null;
    event?: string;
    workflow_id?: number;
    run_number?: number;
    run_attempt?: number;
};
export declare function matchesDispatchedRun(candidate: WorkflowRun, ref: string, notBeforeMs: number, clockSkewMs?: number): boolean;
export type WorkflowJob = {
    id: number;
    name: string;
    status: string;
    conclusion: string | null;
    outputs?: Record<string, string>;
};
export type WorkflowArtifact = {
    id: number;
    name: string;
};
export declare function artifactNameForStage(stageId: string): string;
export declare class GitHubActionsClient {
    private readonly token;
    private readonly owner;
    private readonly repo;
    private readonly apiUrl;
    private readonly crossRepo;
    constructor(token: string, owner: string, repo: string, apiUrl?: string, crossRepo?: boolean);
    private request;
    private downloadBinary;
    getWorkflowByPath(workflowPath: string): Promise<WorkflowSummary>;
    dispatchWorkflow(workflowId: number, ref: string, inputs: Record<string, string>): Promise<void>;
    waitForRun(workflowId: number, ref: string, notBeforeMs: number, timeoutMs: number, pollMs: number): Promise<WorkflowRun>;
    waitForRunCompletion(runId: number, timeoutMs: number, pollMs: number): Promise<WorkflowRun>;
    getWorkflowRun(runId: number): Promise<WorkflowRun & {
        workflow_id: number;
    }>;
    listWorkflowRuns(workflowId: number, opts?: {
        status?: string;
    }): Promise<WorkflowRun[]>;
    cancelWorkflowRun(runId: number): Promise<void>;
    getJob(jobId: number): Promise<WorkflowJob>;
    listRunJobs(runId: number): Promise<WorkflowJob[]>;
    listRunArtifacts(runId: number): Promise<WorkflowArtifact[]>;
    downloadArtifactOutputs(artifactId: number): Promise<Record<string, string>>;
    downloadArtifactFile(artifactId: number, fileName: string): Promise<string>;
    findPreviousAttemptRunId(currentRunId: number, runAttempt: number): Promise<number | null>;
    waitForStageArtifact(runId: number, stageId: string, timeoutMs: number, pollMs: number): Promise<Record<string, string>>;
    withRepo(owner: string, repo: string, tokenOverride?: string): GitHubActionsClient;
}
export declare function stripRefPrefix(ref: string): string;
