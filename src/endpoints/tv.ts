import {BaseEndpoint, QueryDateLimiter, QueryParameters} from './baseEndpoint';
import {
    TVAlternativeTitlesResponse,
    TVDetailsResponse,
    TVChangesResponse,
    TVContentRatingsResponse,
    TVCreditsResponse,
    TVEpisodeGroupsResponse,
    TVExternalIDResponse,
    TVImagesResponse,
    TVKeywordsResponse,
    TVRecommendationsResponse,
    TVReviewsResponse,
    TVScreenedTheatricallyResponse,
    TVSimilarResponse,
    TVTranslationsResponse,
    TVVideosResponse,
    TVAiringTodayResponse,
    TVOnTheAirResponse,
    TVPopularResponse,
    TVTopRatedResponse,
} from '../interfaces/tv';

/**
 * TV Endpoint Class
 */
export class TV extends BaseEndpoint {

    /**
     * Get the primary TV show details by id.
     * @param { number } tvID
     * @return { Promise<TVDetailsResponse> }
     * @see https://developers.themoviedb.org/3/tv/get-tv-details
     * TODO: Add the `appends_to_response` option
     */
    public async details(tvID: number): Promise<TVDetailsResponse> {
        return this.sendGetRequest(`tv/${tvID}`);
    }

    /**
     * Returns all of the alternative titles for a TV show.
     * @param { number } tvID
     * @return { Promise<TVAlternativeTitlesResponse> }
     * @see https://developers.themoviedb.org/3/tv/get-tv-alternative-titles
     */
    public async alternativeTitles(tvID: number): Promise<TVAlternativeTitlesResponse> {
        return this.sendGetRequest(`tv/${tvID}/alternative_titles`);
    }

    /**
     * Get the changes for a TV show. By default only the last 24 hours are returned.
     * You can query up to 14 days in a single query by using the `start_date` and `end_date` query parameters.
     * @param { number } tvID
     * @param { QueryDateLimiter } parameters
     * @return { Promise<TVChangesResponse> }
     * @see https://developers.themoviedb.org/3/tv/get-tv-changes
     */
    public async changes(tvID: number, parameters: QueryDateLimiter = {}): Promise<TVChangesResponse> {
        return this.sendGetRequest(`tv/${tvID}/changes`, parameters as QueryParameters);
    }

    /**
     * Get the list of content ratings (certifications) that have been added to a TV show.
     * @param { number } tvID
     * @return { Promise<TVContentRatingsResponse> }
     * @see https://developers.themoviedb.org/3/tv/get-tv-content-ratings
     */
    public async contentRatings(tvID: number): Promise<TVContentRatingsResponse> {
        return this.sendGetRequest(`tv/${tvID}/content_ratings`);
    }

    /**
     * Get the credits (cast and crew) that have been added to a TV show.
     * @param { number } tvID
     * @return { Promise<TVCreditsResponse> }
     * @see https://developers.themoviedb.org/3/tv/get-tv-credits
     */
    public async credits(tvID: number): Promise<TVCreditsResponse> {
        return this.sendGetRequest(`tv/${tvID}/credits`);
    }

    /**
     * Get all of the episode groups that have been created for a TV show.
     * @param { number } tvID
     * @return { Promise<TVEpisodeGroupsResponse> }
     * @see https://developers.themoviedb.org/3/tv/get-tv-episode-groups
     */
    public async episodeGroup(tvID: number): Promise<TVEpisodeGroupsResponse> {
        return this.sendGetRequest(`tv/${tvID}/episode_groups`);
    }

    /**
     * Get the external ids for a TV show.
     * @param { number } tvID
     * @return { Promise<TVExternalIDResponse> }
     * @see https://developers.themoviedb.org/3/tv/get-tv-external-ids
     */
    public async externalIDs(tvID: number): Promise<TVExternalIDResponse> {
        return this.sendGetRequest(`tv/${tvID}/external_ids`);
    }

    /**
     * Get the images that belong to a TV show.
     * @param { number } tvID
     * @param { QueryParameters } parameters
     * @return { Promise<TVImagesResponse> }
     * @see https://developers.themoviedb.org/3/tv/get-tv-images
     */
    public async images(tvID: number, parameters: QueryParameters = {}): Promise<TVImagesResponse> {
        return this.sendGetRequest(`tv/${tvID}/images`, parameters);
    }

    /**
     * Get the keywords that have been added to a TV show.
     * @param { number } tvID
     * @return { Promise<TVKeywordsResponse> }
     * @see https://developers.themoviedb.org/3/tv/get-tv-keywords
     */
    public async keywords(tvID: number): Promise<TVKeywordsResponse> {
        return this.sendGetRequest(`tv/${tvID}/keywords`);
    }

    /**
     * Get the list of TV show recommendations for this item.
     * @param { number } tvID
     * @return { Promise<TVRecommendationsResponse> }
     * @see https://developers.themoviedb.org/3/tv/get-tv-recommendations
     */
    public async recommendations(tvID: number): Promise<TVRecommendationsResponse> {
        return this.sendGetRequest(`tv/${tvID}/recommendations`);
    }

    /**
     * Get the reviews for a TV show.
     * @param { number } tvID
     * @return { Promise<TVReviewsResponse> }
     * @see https://developers.themoviedb.org/3/tv/get-tv-reviews
     */
    public async reviews(tvID: number): Promise<TVReviewsResponse> {
        return this.sendGetRequest(`tv/${tvID}/reviews`);
    }

    /**
     * Get a list of seasons or episodes that have been screened in a film festival or theatre.
     * @param { number } tvID
     * @return { Promise<TVScreenedTheatricallyResponse> }
     * @see https://developers.themoviedb.org/3/tv/get-screened-theatrically
     */
    public async screenedTheatrically(tvID: number): Promise<TVScreenedTheatricallyResponse> {
        return this.sendGetRequest(`tv/${tvID}/screened_theatrically`);
    }

    /**
     * Get a list of similar TV shows.
     * These items are assembled by looking at keywords and genres.
     * @param { number } tvID
     * @return { Promise<TVSimilarResponse> }
     * @see https://developers.themoviedb.org/3/tv/get-similar-tv-shows
     */
    public async similar(tvID: number): Promise<TVSimilarResponse> {
        return this.sendGetRequest(`tv/${tvID}/similar`);
    }

    /**
     * Get a list of the translations that exist for a TV show.
     * @param { number } tvID
     * @return { Promise<TVTranslationsResponse> }
     * @see https://developers.themoviedb.org/3/tv/get-similar-tv-shows
     */
    public async translations(tvID: number): Promise<TVTranslationsResponse> {
        return this.sendGetRequest(`tv/${tvID}/translations`);
    }

    /**
     * Get the videos that have been added to a TV show.
     * @param { number } tvID
     * @return { Promise<TVTranslationsResponse> }
     * @see https://developers.themoviedb.org/3/tv/get-tv-videos
     */
    public async videos(tvID: number): Promise<TVVideosResponse> {
        return this.sendGetRequest(`tv/${tvID}/videos`);
    }

    /**
     * Get the most newly created TV show.
     * This is a live response and will continuously change.
     * @return { Promise<TVTranslationsResponse> }
     * @see https://developers.themoviedb.org/3/tv/get-latest-tv
     */
    public async latest(): Promise<TVDetailsResponse> {
        return this.sendGetRequest(`tv/latest`);
    }

    /**
     * Get a list of TV shows that are airing today.
     * This query is purely day based as we do not currently support airing times.
     * @return { Promise<TVAiringTodayResponse> }
     * @see https://developers.themoviedb.org/3/tv/get-tv-airing-today
     */
    public async airingToday(): Promise<TVAiringTodayResponse> {
        return this.sendGetRequest(`tv/airing_today`);
    }

    /**
     * Get a list of shows that are currently on the air.
     * This query looks for any TV show that has an episode with an air date in the next 7 days.
     * @return { Promise<TVOnTheAirResponse> }
     * @see https://developers.themoviedb.org/3/tv/get-tv-airing-today
     */
    public async onTheAir(): Promise<TVOnTheAirResponse> {
        return this.sendGetRequest(`tv/on_the_air`);
    }

    /**
     * Get a list of the current popular TV shows on TMDb. This list updates daily.
     * @return { Promise<TVPopularResponse> }
     * @see https://developers.themoviedb.org/3/tv/get-popular-tv-shows
     */
    public async popular(): Promise<TVPopularResponse> {
        return this.sendGetRequest(`tv/popular`);
    }

    /**
     * Get a list of the top rated TV shows on TMDb.
     * @return { Promise<TVTopRatedResponse> }
     * @see https://developers.themoviedb.org/3/tv/get-top-rated-tv
     */
    public async topRated(): Promise<TVTopRatedResponse> {
        return this.sendGetRequest(`tv/top_rated`);
    }

}
