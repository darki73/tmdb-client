import { TVDetailsResponse } from './TVDetailsResponse';

export interface TVPopularResponse {
    page: number;
    results: [TVDetailsResponse];
    total_pages: number;
    total_results: number;
}
