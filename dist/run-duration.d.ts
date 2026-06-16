export type RunTiming = {
    run_started_at?: string | null;
    updated_at?: string | null;
};
export declare function runDurationSeconds(run: RunTiming): number | undefined;
export declare function formatSavedDuration(totalSeconds: number): string;
