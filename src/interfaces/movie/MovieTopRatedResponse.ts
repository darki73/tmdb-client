import { MovieDetailsResponse } from './MovieDetailsResponse';

export interface MovieTopRatedResponse {
    page: number;
    results: [MovieDetailsResponse];
    total_pages: number;
    total_results: number;
}
