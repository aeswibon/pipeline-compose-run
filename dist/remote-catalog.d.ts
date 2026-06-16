import { parseRemoteCatalogYaml, type CatalogFromRef } from '@aeswibon/pipeline-compose-core';
import { type PipelineDocument } from '@aeswibon/pipeline-compose-core';
import type { GitHubActionsClient } from './github.js';
import { type RepoTokenMap } from './repo-tokens.js';
import type { GitHubAppTokenProvider } from './github-app.js';
export declare function fetchRemoteCatalog(ref: CatalogFromRef, baseClient: GitHubActionsClient, options: {
    defaultOwner: string;
    defaultRepo: string;
    githubToken: string;
    repoTokens: RepoTokenMap;
    appTokenProvider?: GitHubAppTokenProvider;
}): Promise<ReturnType<typeof parseRemoteCatalogYaml>>;
export declare function applyRemoteCatalogToDocuments(docs: PipelineDocument[], baseClient: GitHubActionsClient, options: {
    defaultOwner: string;
    defaultRepo: string;
    githubToken: string;
    repoTokens: RepoTokenMap;
    appTokenProvider?: GitHubAppTokenProvider;
}): Promise<PipelineDocument[]>;
