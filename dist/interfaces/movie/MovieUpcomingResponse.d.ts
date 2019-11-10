import { MovieDetailsResponse } from './MovieDetailsResponse';
export interface MovieUpcomingDates {
    maximum: string;
    minimum: string;
}
export interface MovieUpcomingResponse {
    page: number;
    results: [MovieDetailsResponse];
    dates: MovieUpcomingDates;
    total_pages: number;
    total_results: number;
}
