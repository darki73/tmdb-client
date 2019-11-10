import { MovieDetailsResponse } from '../movie';

export interface DiscoverMovieResponse {
    page: number;
    results: [MovieDetailsResponse];
    total_results: number;
    total_pages: number;
}
