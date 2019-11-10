import { TVDetailsResponse } from './TVDetailsResponse';
export interface TVOnTheAirResponse {
    page: number;
    results: [TVDetailsResponse];
    total_pages: number;
    total_results: number;
}
