import { BaseEndpoint } from './baseEndpoint';
import { GenresResponse } from '../interfaces/genres';

/**
 * Genre Endpoint Class
 */
export class Genre extends BaseEndpoint {

    /**
     * Get the list of official genres for movies.
     * @return { Promise<GenresResponse> }
     * @see https://developers.themoviedb.org/3/genres/get-movie-list
     */
    public async movie(): Promise<GenresResponse> {
        return this.sendGetRequest(`genre/movie/list`);
    }

    /**
     * Get the list of official genres for TV shows.
     * @return { Promise<GenresResponse> }
     * @see https://developers.themoviedb.org/3/genres/get-tv-list
     */
    public async tv(): Promise<GenresResponse> {
        return this.sendGetRequest('genre/tv/list');
    }

}
