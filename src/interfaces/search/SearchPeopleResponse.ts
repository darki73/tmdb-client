import { PersonDetailsResponse } from '../person';

export interface PeopleSearchQuery {
    region?: string;
}

export interface SearchPeopleResponse {
    page: number;
    results: [PersonDetailsResponse];
    total_pages: number;
    total_results: number;
}
