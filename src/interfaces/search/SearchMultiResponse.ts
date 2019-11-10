import { MovieDetailsResponse } from '../movie';
import { PersonDetailsResponse } from '../person';
import { TVDetailsResponse } from '../tv';

export interface MultiSearchQuery {
    region?: string;
}

export interface SearchMultiResponse {
    page: number;
    results: [MovieDetailsResponse | PersonDetailsResponse | TVDetailsResponse];
    total_pages: number;
    total_results: number;
}
