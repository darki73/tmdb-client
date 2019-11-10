import { BaseEndpoint } from './baseEndpoint';
import { TVEpisodeDetailsResponse, TVEpisodeCreditsResponse, TVEpisodeExternalIDResponse, TVEpisodeImagesResponse, TVEpisodeTranslationsResponse, TVEpisodeVideosResponse } from '../interfaces/tvEpisode';
export declare class TVEpisode extends BaseEndpoint {
    private showID;
    private seasonNumber;
    show(showID: number): TVEpisode;
    season(seasonNumber: number): TVEpisode;
    details(episodeNumber: number, appendToResponse?: string[]): Promise<TVEpisodeDetailsResponse>;
    credits(episodeNumber: number): Promise<TVEpisodeCreditsResponse>;
    externalIDs(episodeNumber: number): Promise<TVEpisodeExternalIDResponse>;
    images(episodeNumber: number): Promise<TVEpisodeImagesResponse>;
    translations(episodeNumber: number): Promise<TVEpisodeTranslationsResponse>;
    videos(episodeNumber: number): Promise<TVEpisodeVideosResponse>;
    private performChecks;
}
