import { BaseEndpoint, QueryDateLimiter, QueryParameters } from './baseEndpoint';
import { TVAlternativeTitlesResponse, TVDetailsResponse, TVChangesResponse, TVContentRatingsResponse, TVCreditsResponse, TVEpisodeGroupsResponse, TVExternalIDResponse, TVImagesResponse, TVKeywordsResponse, TVRecommendationsResponse, TVReviewsResponse, TVScreenedTheatricallyResponse, TVSimilarResponse, TVTranslationsResponse, TVVideosResponse, TVAiringTodayResponse, TVOnTheAirResponse, TVPopularResponse, TVTopRatedResponse } from '../interfaces/tv';
export declare class TV extends BaseEndpoint {
    details(tvID: number): Promise<TVDetailsResponse>;
    alternativeTitles(tvID: number): Promise<TVAlternativeTitlesResponse>;
    changes(tvID: number, parameters?: QueryDateLimiter): Promise<TVChangesResponse>;
    contentRatings(tvID: number): Promise<TVContentRatingsResponse>;
    credits(tvID: number): Promise<TVCreditsResponse>;
    episodeGroup(tvID: number): Promise<TVEpisodeGroupsResponse>;
    externalIDs(tvID: number): Promise<TVExternalIDResponse>;
    images(tvID: number, parameters?: QueryParameters): Promise<TVImagesResponse>;
    keywords(tvID: number): Promise<TVKeywordsResponse>;
    recommendations(tvID: number): Promise<TVRecommendationsResponse>;
    reviews(tvID: number): Promise<TVReviewsResponse>;
    screenedTheatrically(tvID: number): Promise<TVScreenedTheatricallyResponse>;
    similar(tvID: number): Promise<TVSimilarResponse>;
    translations(tvID: number): Promise<TVTranslationsResponse>;
    videos(tvID: number): Promise<TVVideosResponse>;
    latest(): Promise<TVDetailsResponse>;
    airingToday(): Promise<TVAiringTodayResponse>;
    onTheAir(): Promise<TVOnTheAirResponse>;
    popular(): Promise<TVPopularResponse>;
    topRated(): Promise<TVTopRatedResponse>;
}
