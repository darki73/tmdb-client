import { BaseEndpoint, QueryParameters } from './baseEndpoint';
import {
    MovieAlternativeTitlesResponse,
    MovieChangesResponse,
    MovieCreditsResponse,
    MovieDetailsResponse,
    MovieExternalIDResponse,
    MovieImagesResponse,
    MovieKeywordsResponse,
    MovieListsResponse, MovieNowPlayingResponse,
    MoviePopularResponse,
    MovieRecommendationsResponse,
    MovieReleaseDatesResponse,
    MovieReviewsResponse,
    MovieSimilarMoviesResponse, MovieTopRatedResponse,
    MovieTranslationsResponse, MovieUpcomingResponse,
    MovieVideosResponse,
} from '../interfaces/movie';

interface QueryWithRegion {
    region?: string;
}

/**
 * Movie Endpoint Class
 */
export class Movie extends BaseEndpoint {

    /**
     * Get the primary information about a movie.
     * @param { number } movieID
     * @param { QueryParameters } parameters
     * @param { [string] | null } appendToResponse
     * @return { Promise<MovieDetailsResponse> }
     * @see https://developers.themoviedb.org/3/movies/get-movie-details
     */
    public async details(movieID: number, parameters: QueryParameters = {}, appendToResponse: [string] | null = null): Promise<MovieDetailsResponse> {
        return this.sendGetRequest(`movie/${movieID}`, this.buildRequestParameters(parameters, appendToResponse));
    }

    /**
     * Get all of the alternative titles for a movie.
     * @param { number } movieID
     * @param { QueryParameters } parameters
     * @return { Promise<MovieAlternativeTitlesResponse> }
     * @see https://developers.themoviedb.org/3/movies/get-movie-alternative-titles
     */
    public async alternativeTitles(movieID: number, parameters: QueryParameters = {}): Promise<MovieAlternativeTitlesResponse> {
        return this.sendGetRequest(`movie/${movieID}/alternative_titles`, parameters);
    }

    /**
     * Get the changes for a movie. By default only the last 24 hours are returned.
     * You can query up to 14 days in a single query by using the `start_date` and `end_date` query parameters.
     * @param { number } movieID
     * @param { QueryParameters } parameters
     * @return { Promise<MovieChangesResponse> }
     * @see https://developers.themoviedb.org/3/movies/get-movie-changes
     */
    public async changes(movieID: number, parameters: QueryParameters = {}): Promise<MovieChangesResponse> {
        return this.sendGetRequest(`movie/${movieID}/changes`, parameters);
    }

    /**
     * Get the cast and crew for a movie.
     * @param { number } movieID
     * @return { Promise<MovieCreditsResponse> }
     * @see https://developers.themoviedb.org/3/movies/get-movie-credits
     */
    public async credits(movieID: number): Promise<MovieCreditsResponse> {
        return this.sendGetRequest(`movie/${movieID}/credits`);
    }

    /**
     * Get the external ids for a movie.
     * @param { number } movieID
     * @return { Promise<MovieExternalIDResponse> }
     * @see https://developers.themoviedb.org/3/movies/get-movie-external-ids
     */
    public async externalIDs(movieID: number): Promise<MovieExternalIDResponse> {
        return this.sendGetRequest(`movie/${movieID}/external_ids`);
    }

    /**
     * Get the images that belong to a movie.
     * Querying images with a language parameter will filter the results.
     * @param { number } movieID
     * @param { QueryParameters } parameters
     * @return { Promise<MovieChangesResponse> }
     * @see https://developers.themoviedb.org/3/movies/get-movie-images
     */
    public async images(movieID: number, parameters: QueryParameters = {}): Promise<MovieImagesResponse> {
        return this.sendGetRequest(`movie/${movieID}/images`, parameters);
    }

    /**
     * Get the keywords that have been added to a movie.
     * @param { number } movieID
     * @return { Promise<MovieKeywordsResponse> }
     * @see https://developers.themoviedb.org/3/movies/get-movie-keywords
     */
    public async keywords(movieID: number): Promise<MovieKeywordsResponse> {
        return this.sendGetRequest(`movie/${movieID}/keywords`);
    }

    /**
     * Get the release date along with the certification for a movie.
     * @param { number } movieID
     * @return { Promise<MovieReleaseDatesResponse> }
     * @see https://developers.themoviedb.org/3/movies/get-movie-release-dates
     */
    public async releaseDates(movieID: number): Promise<MovieReleaseDatesResponse> {
        return this.sendGetRequest(`movie/${movieID}/release_dates`);
    }

    /**
     * Get the videos that have been added to a movie.
     * @param { number } movieID
     * @return { Promise<MovieVideosResponse> }
     * @see https://developers.themoviedb.org/3/movies/get-movie-videos
     */
    public async videos(movieID: number): Promise<MovieVideosResponse> {
        return this.sendGetRequest(`movie/${movieID}/videos`);
    }

    /**
     * Get a list of translations that have been created for a movie.
     * @param { number } movieID
     * @return { Promise<MovieTranslationsResponse> }
     * @see https://developers.themoviedb.org/3/movies/get-movie-translations
     */
    public async translations(movieID: number): Promise<MovieTranslationsResponse> {
        return this.sendGetRequest(`movie/${movieID}/translations`);
    }

    /**
     * Get a list of recommended movies for a movie.
     * @param { number } movieID
     * @return { Promise<MovieRecommendationsResponse> }
     * @see https://developers.themoviedb.org/3/movies/get-movie-recommendations
     */
    public async recommendations(movieID: number): Promise<MovieRecommendationsResponse> {
        return this.sendGetRequest(`movie/${movieID}/recommendations`);
    }

    /**
     * Get a list of similar movies.
     * This is not the same as the "Recommendation" system you see on the website.
     * These items are assembled by looking at keywords and genres.
     * @param { number } movieID
     * @return { Promise<MovieSimilarMoviesResponse> }
     * @see https://developers.themoviedb.org/3/movies/get-similar-movies
     */
    public async similar(movieID: number): Promise<MovieSimilarMoviesResponse> {
        return this.sendGetRequest(`movie/${movieID}/similar`);
    }

    /**
     * Get the user reviews for a movie.
     * @param { number } movieID
     * @return { Promise<MovieReviewsResponse> }
     * @see https://developers.themoviedb.org/3/movies/get-movie-reviews
     */
    public async reviews(movieID: number): Promise<MovieReviewsResponse> {
        return this.sendGetRequest(`movie/${movieID}/reviews`);
    }

    /**
     * Get a list of lists that this movie belongs to.
     * @param { number } movieID
     * @return { Promise<MovieListsResponse> }
     * @see https://developers.themoviedb.org/3/movies/get-movie-lists
     */
    public async lists(movieID: number): Promise<MovieListsResponse> {
        return this.sendGetRequest(`movie/${movieID}/lists`);
    }

    /**
     * Get the most newly created movie.
     * This is a live response and will continuously change.
     * @return { Promise<MovieDetailsResponse> }
     * @see https://developers.themoviedb.org/3/movies/get-latest-movie
     */
    public async latest(): Promise<MovieDetailsResponse> {
        return this.sendGetRequest(`movie/latest`);
    }

    /**
     * Get a list of movies in theatres.
     * This is a release type query that looks for all movies that have a release type of 2 or 3 within the specified date range.
     * @param { QueryWithRegion } parameters
     * @return { Promise<MovieNowPlayingResponse> }
     * @see https://developers.themoviedb.org/3/movies/get-now-playing
     */
    public async nowPlaying(parameters: QueryWithRegion = {}): Promise<MovieNowPlayingResponse> {
        return this.sendGetRequest(`movie/now_playing`, parameters as QueryParameters);
    }

    /**
     * Get a list of the current popular movies on TMDb. This list updates daily.
     * @param { QueryWithRegion } parameters
     * @return { Promise<MoviePopularResponse> }
     * @see https://developers.themoviedb.org/3/movies/get-popular-movies
     */
    public async popular(parameters: QueryWithRegion = {}): Promise<MoviePopularResponse> {
        return this.sendGetRequest(`movie/popular`, parameters as QueryParameters);
    }

    /**
     * Get the top rated movies on TMDb.
     * @param { QueryWithRegion } parameters
     * @return { Promise<MovieTopRatedResponse> }
     * @see https://developers.themoviedb.org/3/movies/get-top-rated-movies
     */
    public async topRated(parameters: QueryWithRegion = {}): Promise<MovieTopRatedResponse> {
        return this.sendGetRequest(`movie/popular`, parameters as QueryParameters);
    }

    /**
     * Get a list of upcoming movies in theatres.
     * This is a release type query that looks for all movies that have a release type of 2 or 3 within the specified date range.
     * @param { QueryWithRegion } parameters
     * @return { Promise<MovieNowPlayingResponse> }
     * @see https://developers.themoviedb.org/3/movies/get-upcoming
     */
    public async upcoming(parameters: QueryWithRegion = {}): Promise<MovieUpcomingResponse> {
        return this.sendGetRequest(`movie/upcoming`, parameters as QueryParameters);
    }

    /**
     * Build request parameters
     * @param { QueryParameters } parameters
     * @param { [string] | null } appendToResponse
     * @return QueryParameters
     */
    private buildRequestParameters(parameters: QueryParameters = {}, appendToResponse: [string] | null = null): QueryParameters {
        if (appendToResponse !== null) {
            parameters.append_to_response = appendToResponse.join(',');
        }
        return parameters;
    }

}
