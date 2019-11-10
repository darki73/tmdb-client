import { MovieDetailsResponse } from './MovieDetailsResponse';
export interface MovieNowPlayingDates {
    maximum: string;
    minimum: string;
}
export interface MovieNowPlayingResponse {
    page: number;
    results: [MovieDetailsResponse];
    dates: MovieNowPlayingDates;
    total_pages: number;
    total_results: number;
}
