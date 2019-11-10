import { BaseEndpoint } from './baseEndpoint';
import { SearchCompaniesResponse, SearchCollectionsResponse, SearchKeywordsResponse, SearchMovieResponse, SearchPeopleResponse, SearchTVResponse, SearchMultiResponse, MovieSearchQuery, MultiSearchQuery, PeopleSearchQuery, TVSearchQuery } from '../interfaces/search';
export declare class Search extends BaseEndpoint {
    company(query: string): Promise<SearchCompaniesResponse>;
    collection(query: string): Promise<SearchCollectionsResponse>;
    keyword(query: string): Promise<SearchKeywordsResponse>;
    movie(query: string, parameters?: MovieSearchQuery): Promise<SearchMovieResponse>;
    multi(query: string, parameters?: MultiSearchQuery): Promise<SearchMultiResponse>;
    people(query: string, parameters?: PeopleSearchQuery): Promise<SearchPeopleResponse>;
    tv(query: string, parameters?: TVSearchQuery): Promise<SearchTVResponse>;
}
