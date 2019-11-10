import { BaseEndpoint } from './baseEndpoint';
import { TVSeasonDetailsResponse, TVSeasonCreditsResponse, TVSeasonExternalIDResponse, TVSeasonImagesResponse, TVSeasonVideosResponse } from '../interfaces/tvSeason';
export declare class TVSeason extends BaseEndpoint {
    private showID;
    show(showID: number): TVSeason;
    details(seasonNumber: number, appendToResponse?: string[]): Promise<TVSeasonDetailsResponse>;
    credits(seasonNumber: number): Promise<TVSeasonCreditsResponse>;
    externalIDs(seasonNumber: number): Promise<TVSeasonExternalIDResponse>;
    images(seasonNumber: number): Promise<TVSeasonImagesResponse>;
    videos(seasonNumber: number): Promise<TVSeasonVideosResponse>;
    private performChecks;
}
