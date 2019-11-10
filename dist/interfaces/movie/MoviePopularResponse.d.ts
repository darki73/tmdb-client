import { MovieDetailsResponse } from './MovieDetailsResponse';
export interface MoviePopularResponse {
    page: number;
    results: [MovieDetailsResponse];
    total_pages: number;
    total_results: number;
}
