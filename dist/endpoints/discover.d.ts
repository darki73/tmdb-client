import { BaseEndpoint, QueryParameters } from './baseEndpoint';
import { DiscoverMovieResponse, DiscoverTVResponse } from '../interfaces/discover';
export declare class Discover extends BaseEndpoint {
    private onlyTheseGenres;
    private withoutTheseGenres;
    private onlyTheseCompanies;
    withGenres(genres: [number]): Discover;
    withoutGenres(genres: [number]): Discover;
    withCompanies(companies: [number]): Discover;
    movie(parameters?: QueryParameters): Promise<DiscoverMovieResponse>;
    tv(parameters?: QueryParameters): Promise<DiscoverTVResponse>;
    protected mergeParameters(parameters: QueryParameters): QueryParameters;
}
