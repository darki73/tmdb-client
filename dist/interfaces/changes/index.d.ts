export interface Change {
    id: number;
    adult: boolean | null;
}
export interface ChangesResponse {
    results: [Change];
    page: number;
    total_pages: number;
    total_results: number;
}
