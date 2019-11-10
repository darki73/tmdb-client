export interface SearchKeyword {
    id: number;
    name: string;
}
export interface SearchKeywordsResponse {
    page: number;
    results: [SearchKeyword];
    total_pages: number;
    total_results: number;
}
