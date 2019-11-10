import { BaseEndpoint, QueryParameters } from './baseEndpoint';
import {
    DiscoverMovieResponse,
    DiscoverTVResponse,
} from '../interfaces/discover';

/**
 * Discover Endpoint Class
 */
export class Discover extends BaseEndpoint {

    /**
     * We want these genres
     * @var [number] | null
     */
    private onlyTheseGenres: [number] | null = null;

    /**
     * We dont want these genres
     * @var [number] | null
     */
    private withoutTheseGenres: [number] | null = null;

    /**
     * We want only these companies
     * @var [number] | null
     */
    private onlyTheseCompanies: [number] | null = null;

    /**
     * Get media only with these genres
     * @param { [number] } genres
     * @return Discover
     */
    withGenres(genres: [number]): Discover {
        this.onlyTheseGenres = genres;
        return this;
    }

    /**
     * Exclude media with these genres
     * @param { [number] } genres
     * @return Discover
     */
    withoutGenres(genres: [number]): Discover {
        this.withoutTheseGenres = genres;
        return this;
    }

    /**
     * Get media produced by only these companies
     * @param companies
     */
    withCompanies(companies: [number]): Discover {
        this.onlyTheseCompanies = companies;
        return this;
    }

    /**
     * Discover movies by different types of data like average rating, number of votes, genres and certifications.
     * You can get a valid list of certifications from the certifications list method.
     * @param { QueryParameters } parameters
     * @return { Promise<ConfigurationAPIResponse> }
     * @see https://developers.themoviedb.org/3/discover/movie-discover
     */
    public async movie(parameters: QueryParameters = {}): Promise<DiscoverMovieResponse> {
        return this.sendGetRequest(`discover/movie`, this.mergeParameters(parameters));
    }

    /**
     * Discover TV shows by different types of data like average rating, number of votes, genres, the network they aired on and air dates.
     * @param { QueryParameters } parameters
     * @return { Promise<ConfigurationAPIResponse> }
     * @see https://developers.themoviedb.org/3/discover/tv-discover
     */
    public async tv(parameters: QueryParameters = {}): Promise<DiscoverTVResponse> {
        return this.sendGetRequest('discover/tv', this.mergeParameters(parameters));
    }

    /**
     * Merge provided parameters with parameters created with class methods
     * @param parameters
     */
    protected mergeParameters(parameters: QueryParameters): QueryParameters {
        if (this.onlyTheseGenres !== null) {
            parameters.with_genres = this.onlyTheseGenres.join(',');
        }

        if (this.withoutTheseGenres !== null) {
            parameters.without_genres = this.withoutTheseGenres.join(',');
        }

        if (this.onlyTheseGenres !== null) {
            parameters.with_companies = this.onlyTheseCompanies.join(',');
        }

        return parameters;
    }

}
