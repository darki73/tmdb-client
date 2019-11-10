export interface SearchCompany {
    id: number;
    logo_path: null | string;
    name: string;
}
export interface SearchCompaniesResponse {
    page: number;
    results: [SearchCompany];
    total_pages: number;
    total_results: number;
}
