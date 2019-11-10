import { BaseEndpoint } from './baseEndpoint';
import {
    TrendingAllResponse,
    TrendingMovieResponse,
    TrendingPersonResponse,
    TrendingTVResponse,
} from '../interfaces/trending';

/**
 * Trending Endpoint Class
 * @see https://developers.themoviedb.org/3/trending/get-trending
 */
export class Trending extends BaseEndpoint {

    /**
     * Get all trending items for a day
     * @return Promise<TrendingAllResponse>
     */
    public async allDaily(): Promise<TrendingAllResponse> {
        return this.allDry('day');
    }

    /**
     * Get all trending items for a week
     * @return Promise<TrendingAllResponse>
     */
    public async allWeekly(): Promise<TrendingAllResponse> {
        return this.allDry('week');
    }

    /**
     * Get all trending movies for a day
     * @return Promise<TrendingMovieResponse>
     */
    public async moviesDaily(): Promise<TrendingMovieResponse> {
        return this.movieDry('day');
    }

    /**
     * Get all trending movies for a week
     * @return Promise<TrendingMovieResponse>
     */
    public async moviesWeekly(): Promise<TrendingMovieResponse> {
        return this.movieDry('week');
    }

    /**
     * Get all trending people for a day
     * @return Promise<TrendingPersonResponse>
     */
    public async peopleDaily(): Promise<TrendingPersonResponse> {
        return this.personDry('day');
    }

    /**
     * Get all trending people for a week
     * @return Promise<TrendingPersonResponse>
     */
    public async peopleWeekly(): Promise<TrendingPersonResponse> {
        return this.personDry('week');
    }

    /**
     * Get all trending TV Series for a day
     * @return Promise<TrendingTVResponse>
     */
    public async tvDaily(): Promise<TrendingTVResponse> {
        return this.tvDry('day');
    }

    /**
     * Get all trending TV Series for a week
     * @return Promise<TrendingTVResponse>
     */
    public async tvWeekly(): Promise<TrendingTVResponse> {
        return this.tvDry('week');
    }

    /**
     * Get list of all trending items for a given time slice
     * @param { string } timeSlice
     * @return Promise<TrendingAllResponse>
     */
    private async allDry(timeSlice: string): Promise<TrendingAllResponse> {
        return this.sendGetRequest(`trending/all/${timeSlice}`);
    }

    /**
     * Get list of trending movies for a given time slice
     * @param { string } timeSlice
     * @return Promise<TrendingAllResponse>
     */
    private async movieDry(timeSlice: string): Promise<TrendingMovieResponse> {
        return this.sendGetRequest(`trending/movie/${timeSlice}`);
    }

    /**
     * Get list of trending people for a given time slice
     * @param { string } timeSlice
     * @return Promise<TrendingPersonResponse>
     */
    private async personDry(timeSlice: string): Promise<TrendingPersonResponse> {
        return this.sendGetRequest(`trending/person/${timeSlice}`);
    }

    /**
     * Get list of trending tv series for a given time slice
     * @param { string } timeSlice
     * @return Promise<TrendingTVResponse>
     */
    private async tvDry(timeSlice: string): Promise<TrendingTVResponse> {
        return this.sendGetRequest(`trending/tv/${timeSlice}`);
    }

}
