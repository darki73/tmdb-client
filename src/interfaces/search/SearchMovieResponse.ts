import { MovieDetailsResponse } from '../movie';

export interface MovieSearchQuery {
    region?: string;
    year?: number;
    primary_release_year?: number;
}

export interface SearchMovieResponse {
    page: number;
    results: [MovieDetailsResponse];
    total_pages: number;
    total_results: number;
}
