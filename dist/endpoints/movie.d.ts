import { BaseEndpoint, QueryParameters } from './baseEndpoint';
import { MovieAlternativeTitlesResponse, MovieChangesResponse, MovieCreditsResponse, MovieDetailsResponse, MovieExternalIDResponse, MovieImagesResponse, MovieKeywordsResponse, MovieListsResponse, MovieNowPlayingResponse, MoviePopularResponse, MovieRecommendationsResponse, MovieReleaseDatesResponse, MovieReviewsResponse, MovieSimilarMoviesResponse, MovieTopRatedResponse, MovieTranslationsResponse, MovieUpcomingResponse, MovieVideosResponse } from '../interfaces/movie';
interface QueryWithRegion {
    region?: string;
}
export declare class Movie extends BaseEndpoint {
    details(movieID: number, parameters?: QueryParameters, appendToResponse?: [string] | null): Promise<MovieDetailsResponse>;
    alternativeTitles(movieID: number, parameters?: QueryParameters): Promise<MovieAlternativeTitlesResponse>;
    changes(movieID: number, parameters?: QueryParameters): Promise<MovieChangesResponse>;
    credits(movieID: number): Promise<MovieCreditsResponse>;
    externalIDs(movieID: number): Promise<MovieExternalIDResponse>;
    images(movieID: number, parameters?: QueryParameters): Promise<MovieImagesResponse>;
    keywords(movieID: number): Promise<MovieKeywordsResponse>;
    releaseDates(movieID: number): Promise<MovieReleaseDatesResponse>;
    videos(movieID: number): Promise<MovieVideosResponse>;
    translations(movieID: number): Promise<MovieTranslationsResponse>;
    recommendations(movieID: number): Promise<MovieRecommendationsResponse>;
    similar(movieID: number): Promise<MovieSimilarMoviesResponse>;
    reviews(movieID: number): Promise<MovieReviewsResponse>;
    lists(movieID: number): Promise<MovieListsResponse>;
    latest(): Promise<MovieDetailsResponse>;
    nowPlaying(parameters?: QueryWithRegion): Promise<MovieNowPlayingResponse>;
    popular(parameters?: QueryWithRegion): Promise<MoviePopularResponse>;
    topRated(parameters?: QueryWithRegion): Promise<MovieTopRatedResponse>;
    upcoming(parameters?: QueryWithRegion): Promise<MovieUpcomingResponse>;
    private buildRequestParameters;
}
export {};
