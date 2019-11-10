import { BaseEndpoint, QueryParameters } from './baseEndpoint';
import {
    TVEpisodeDetailsResponse,
    TVEpisodeCreditsResponse,
    TVEpisodeExternalIDResponse,
    TVEpisodeImagesResponse,
    TVEpisodeTranslationsResponse,
    TVEpisodeVideosResponse,
} from '../interfaces/tvEpisode';

/**
 * TVEpisode Endpoint Class
 */
export class TVEpisode extends BaseEndpoint {

    /**
     * Show ID we are working with
     * @var number | null
     */
    private showID: number | null = null;

    /**
     * Season Number we are working with
     * @var number | null
     */
    private seasonNumber: number | null = null;

    /**
     * Set the Show ID we are working with
     * @param { number } showID
     * @return TVEpisode
     */
    public show(showID: number): TVEpisode {
        this.showID = showID;
        return this;
    }

    /**
     * Set the Season Number we are working with
     * @param { number } seasonNumber
     * @return TVEpisode
     */
    public season(seasonNumber: number): TVEpisode {
        this.seasonNumber = seasonNumber;
        return this;
    }

    /**
     * Get the TV episode details by id.
     * @param { number } episodeNumber
     * @param { string[] } appendToResponse
     * @return { Promise<TVEpisodeDetailsResponse> }
     * @see https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-details
     */
    public async details(episodeNumber: number, appendToResponse: string[] = []): Promise<TVEpisodeDetailsResponse> {
        this.performChecks();
        return this.sendGetRequest(`tv/${this.showID}/season/${this.seasonNumber}/episode/${episodeNumber}`, {
            append_to_response: appendToResponse,
        } as QueryParameters);
    }

    /**
     * Get the credits (cast, crew and guest stars) for a TV episode.
     * @param { number } episodeNumber
     * @return { Promise<TVEpisodeCreditsResponse> }
     * @see https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-credits
     */
    public async credits(episodeNumber: number): Promise<TVEpisodeCreditsResponse> {
        this.performChecks();
        return this.sendGetRequest(`tv/${this.showID}/season/${this.seasonNumber}/episode/${episodeNumber}/credits`);
    }

    /**
     * Get the external ids for a TV episode.
     * @param { number } episodeNumber
     * @return { Promise<TVEpisodeExternalIDResponse> }
     * @see https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-external-ids
     */
    public async externalIDs(episodeNumber: number): Promise<TVEpisodeExternalIDResponse> {
        this.performChecks();
        return this.sendGetRequest(`tv/${this.showID}/season/${this.seasonNumber}/episode/${episodeNumber}/external_ids`);
    }

    /**
     * Get the images that belong to a TV episode.
     * @param { number } episodeNumber
     * @return { Promise<TVEpisodeImagesResponse> }
     * @see https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-images
     */
    public async images(episodeNumber: number): Promise<TVEpisodeImagesResponse> {
        this.performChecks();
        return this.sendGetRequest(`tv/${this.showID}/season/${this.seasonNumber}/episode/${episodeNumber}/images`);
    }

    /**
     * Get the translation data for an episode.
     * @param { number } episodeNumber
     * @return { Promise<TVEpisodeTranslationsResponse> }
     * @see https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-translations
     */
    public async translations(episodeNumber: number): Promise<TVEpisodeTranslationsResponse> {
        this.performChecks();
        return this.sendGetRequest(`tv/${this.showID}/season/${this.seasonNumber}/episode/${episodeNumber}/translations`);
    }

    /**
     * Get the videos that have been added to a TV episode.
     * @param { number } episodeNumber
     * @return { Promise<TVEpisodeVideosResponse> }
     * @see https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-videos
     */
    public async videos(episodeNumber: number): Promise<TVEpisodeVideosResponse> {
        this.performChecks();
        return this.sendGetRequest(`tv/${this.showID}/season/${this.seasonNumber}/episode/${episodeNumber}/videos`);
    }

    /**
     * Perform necessary checks before executing request
     * @return void
     */
    private performChecks(): void {
        if (this.showID === null) {
            throw new Error('You must set the Show ID first via the `show(showID: number)` method!');
        }
        if (this.seasonNumber === null) {
            throw new Error('You must set the Season Number first via the `season(seasonNumber: number)` method!');
        }
    }

}
