import { TVDetailsResponse } from '../tv';
export interface TVSearchQuery {
    first_air_date_year?: number;
}
export interface SearchTVResponse {
    page: number;
    results: [TVDetailsResponse];
    total_pages: number;
    total_results: number;
}
