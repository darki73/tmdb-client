export interface SearchCollection {
    id: number;
    backdrop_path: string | null;
    name: string;
    poster_path: string | null;
}

export interface SearchCollectionsResponse {
    page: number;
    results: [SearchCollection];
    total_pages: number;
    total_results: number;
}
