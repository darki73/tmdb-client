import { BaseEndpoint, QueryParameters } from './baseEndpoint';
import {
    SearchCompaniesResponse,
    SearchCollectionsResponse,
    SearchKeywordsResponse,
    SearchMovieResponse,
    SearchPeopleResponse,
    SearchTVResponse,
    SearchMultiResponse,
    MovieSearchQuery,
    MultiSearchQuery, PeopleSearchQuery, TVSearchQuery,
} from '../interfaces/search';

/**
 * Search Endpoint Class
 */
export class Search extends BaseEndpoint {

    /**
     * Search for companies.
     * @param { string } query
     * @return { Promise<SearchCompaniesResponse> }
     * @see https://developers.themoviedb.org/3/search/search-companies
     */
    public async company(query: string): Promise<SearchCompaniesResponse> {
        return this.sendGetRequest('search/company', { query } as QueryParameters);
    }

    /**
     * Search for collections.
     * @param { string } query
     * @return { Promise<SearchCollectionsResponse> }
     * @see https://developers.themoviedb.org/3/search/search-collections
     */
    public async collection(query: string): Promise<SearchCollectionsResponse> {
        return this.sendGetRequest('search/collection', { query } as QueryParameters);
    }

    /**
     * Search for keywords.
     * @param { string } query
     * @return { Promise<SearchKeywordsResponse> }
     * @see https://developers.themoviedb.org/3/search/search-keywords
     */
    public async keyword(query: string): Promise<SearchKeywordsResponse> {
        return this.sendGetRequest('search/keyword', { query } as QueryParameters);
    }

    /**
     * Search for movies.
     * @param { string } query
     * @param { MovieSearchQuery } parameters
     * @return { Promise<SearchMovieResponse> }
     * @see https://developers.themoviedb.org/3/search/search-movies
     */
    public async movie(query: string, parameters: MovieSearchQuery = {}): Promise<SearchMovieResponse> {
        return this.sendGetRequest('search/movie', { ...{ query }, ...parameters } as QueryParameters);
    }

    /**
     * Search multiple models in a single request.
     * Multi search currently supports searching for movies, tv shows and people in a single request.
     * @param { string } query
     * @param { MultiSearchQuery } parameters
     * @return { Promise<SearchMultiResponse> }
     * @see https://developers.themoviedb.org/3/search/multi-search
     */
    public async multi(query: string, parameters: MultiSearchQuery = {}): Promise<SearchMultiResponse> {
        return this.sendGetRequest('search/multi', { ...{ query }, ...parameters } as QueryParameters);
    }

    /**
     * Search for people.
     * @param { string } query
     * @param { PeopleSearchQuery } parameters
     * @return { Promise<SearchPeopleResponse> }
     * @see https://developers.themoviedb.org/3/search/search-people
     */
    public async people(query: string, parameters: PeopleSearchQuery = {}): Promise<SearchPeopleResponse> {
        return this.sendGetRequest('search/people', { ...{ query }, ...parameters } as QueryParameters);
    }

    /**
     * Search for a TV show.
     * @param { string } query
     * @param { PeopleSearchQuery } parameters
     * @return { Promise<SearchTVResponse> }
     * @see https://developers.themoviedb.org/3/search/search-tv-shows
     */
    public async tv(query: string, parameters: TVSearchQuery = {}): Promise<SearchTVResponse> {
        return this.sendGetRequest('search/tv', { ...{ query }, ...parameters } as QueryParameters);
    }

}
