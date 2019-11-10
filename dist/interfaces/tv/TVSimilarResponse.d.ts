import { TVDetailsResponse } from './TVDetailsResponse';
export interface TVSimilarResponse {
    page: number;
    results: [TVDetailsResponse];
    total_pages: number;
    total_results: number;
}
