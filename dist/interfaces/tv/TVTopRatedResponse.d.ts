import { TVDetailsResponse } from './TVDetailsResponse';
export interface TVTopRatedResponse {
    page: number;
    results: [TVDetailsResponse];
    total_pages: number;
    total_results: number;
}
