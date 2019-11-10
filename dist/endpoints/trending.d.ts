import { BaseEndpoint } from './baseEndpoint';
import { TrendingAllResponse, TrendingMovieResponse, TrendingPersonResponse, TrendingTVResponse } from '../interfaces/trending';
export declare class Trending extends BaseEndpoint {
    allDaily(): Promise<TrendingAllResponse>;
    allWeekly(): Promise<TrendingAllResponse>;
    moviesDaily(): Promise<TrendingMovieResponse>;
    moviesWeekly(): Promise<TrendingMovieResponse>;
    peopleDaily(): Promise<TrendingPersonResponse>;
    peopleWeekly(): Promise<TrendingPersonResponse>;
    tvDaily(): Promise<TrendingTVResponse>;
    tvWeekly(): Promise<TrendingTVResponse>;
    private allDry;
    private movieDry;
    private personDry;
    private tvDry;
}
