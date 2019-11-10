/**
 * Change definition
 */
export interface Change {
    id: number;
    adult: boolean | null;
}

/**
 * Interface which represents list of changes
 */
export interface ChangesResponse {
    results: [Change];
    page: number;
    total_pages: number;
    total_results: number;
}
