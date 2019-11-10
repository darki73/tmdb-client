export interface ConfigurationJob {
    department: string;
    jobs: string[];
}

export interface ConfigurationJobsResponse {
    [index: number]: ConfigurationJob;
}
