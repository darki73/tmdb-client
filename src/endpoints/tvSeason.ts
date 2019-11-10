import { BaseEndpoint, QueryParameters } from './baseEndpoint';
import {
    TVSeasonDetailsResponse,
    TVSeasonCreditsResponse,
    TVSeasonExternalIDResponse,
    TVSeasonImagesResponse,
    TVSeasonVideosResponse,
} from '../interfaces/tvSeason';

/**
 * TVSeason Endpoint Class
 */
export class TVSeason extends BaseEndpoint {

    /**
     * Show ID we are working with
     * @var number | null
     */
    private showID: number | null = null;

    /**
     * Set the Show ID we are working with
     * @param { number } showID
     * @return TVSeason
     */
    public show(showID: number): TVSeason {
        this.showID = showID;
        return this;
    }

    /**
     * Get the TV season details by id.
     * @param { number } seasonNumber
     * @param { string[] } appendToResponse
     * @return { Promise<TVSeasonDetailsResponse> }
     * @see https://developers.themoviedb.org/3/tv-seasons/get-tv-season-details
     */
    public async details(seasonNumber: number, appendToResponse: string[] = []): Promise<TVSeasonDetailsResponse> {
        this.performChecks();
        return this.sendGetRequest(`tv/${this.showID}/season/${seasonNumber}`, {
            append_to_response: appendToResponse,
        } as QueryParameters);
    }

    /**
     * Get the credits for TV season.
     * @param { number } seasonNumber
     * @return { Promise<TVSeasonCreditsResponse> }
     * @see https://developers.themoviedb.org/3/tv-seasons/get-tv-season-credits
     */
    public async credits(seasonNumber: number): Promise<TVSeasonCreditsResponse> {
        this.performChecks();
        return this.sendGetRequest(`tv/${this.showID}/season/${seasonNumber}/credits`);
    }

    /**
     * Get the external ids for a TV season.
     * @param { number } seasonNumber
     * @return { Promise<TVSeasonExternalIDResponse> }
     * @see https://developers.themoviedb.org/3/tv-seasons/get-tv-season-external-ids
     */
    public async externalIDs(seasonNumber: number): Promise<TVSeasonExternalIDResponse> {
        this.performChecks();
        return this.sendGetRequest(`tv/${this.showID}/season/${seasonNumber}/external_ids`);
    }

    /**
     * Get the images that belong to a TV season.
     * @param { number } seasonNumber
     * @return { Promise<TVSeasonImagesResponse> }
     * @see https://developers.themoviedb.org/3/tv-seasons/get-tv-season-images
     */
    public async images(seasonNumber: number): Promise<TVSeasonImagesResponse> {
        this.performChecks();
        return this.sendGetRequest(`tv/${this.showID}/season/${seasonNumber}/images`);
    }

    /**
     * Get the videos that have been added to a TV season.
     * @param { number } seasonNumber
     * @return { Promise<TVSeasonVideosResponse> }
     * @see https://developers.themoviedb.org/3/tv-seasons/get-tv-season-external-ids
     */
    public async videos(seasonNumber: number): Promise<TVSeasonVideosResponse> {
        this.performChecks();
        return this.sendGetRequest(`tv/${this.showID}/season/${seasonNumber}/videos`);
    }

    /**
     * Perform necessary checks before executing request
     * @return void
     */
    private performChecks(): void {
        if (this.showID === null) {
            throw new Error('You must set the Show ID first via the `show(showID: number)` method!');
        }
    }

}
