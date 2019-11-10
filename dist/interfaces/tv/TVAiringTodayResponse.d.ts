import { TVDetailsResponse } from './TVDetailsResponse';
export interface TVAiringTodayResponse {
    page: number;
    results: [TVDetailsResponse];
    total_pages: number;
    total_results: number;
}
