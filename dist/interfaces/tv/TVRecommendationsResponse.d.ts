import { TVDetailsResponse } from './TVDetailsResponse';
export interface TVRecommendationsResponse {
    page: number;
    results: [TVDetailsResponse];
    total_pages: number;
    total_results: number;
}
