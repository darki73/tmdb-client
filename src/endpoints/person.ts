import { BaseEndpoint, QueryParameters, QueryDateLimiter } from './baseEndpoint';
import {
    PersonDetailsResponse,
    PersonChangesResponse,
    PersonMovieCreditsResponse,
    PersonTVCreditsResponse,
    PersonCombinedCreditsResponse,
    PersonExternalIDResponse,
    PersonImagesResponse,
    PersonTaggedImagesResponse,
    PersonTranslationsResponse,
} from '../interfaces/person';

/**
 * Person Endpoint Class
 */
export class Person extends BaseEndpoint {

    /**
     * Get the primary person details by id.
     * @param { number } personID
     * @param { QueryParameters } parameters
     * @return { Promise<PersonDetailsResponse> }
     * @see https://developers.themoviedb.org/3/people/get-person-details
     */
    public async details(personID: number, parameters: QueryParameters = {}): Promise<PersonDetailsResponse> {
        return this.sendGetRequest(`person/${personID}`);
    }

    /**
     * Get the changes for a person. By default only the last 24 hours are returned.
     * You can query up to 14 days in a single query by using the `start_date` and `end_date` query parameters.
     * @param { number } personID
     * @param { QueryDateLimiter } parameters
     * @return { Promise<PersonChangesResponse> }
     * @see https://developers.themoviedb.org/3/people/get-person-changes
     */
    public async changes(personID: number, parameters: QueryDateLimiter = {}): Promise<PersonChangesResponse> {
        return this.sendGetRequest(`person/${personID}/changes`, parameters as QueryParameters);
    }

    /**
     * Get the movie credits for a person.
     * @param { number } personID
     * @return { Promise<PersonMovieCreditsResponse> }
     * @see https://developers.themoviedb.org/3/people/get-person-movie-credits
     */
    public async movieCredits(personID: number): Promise<PersonMovieCreditsResponse> {
        return this.sendGetRequest(`person/${personID}/movie_credits`);
    }

    /**
     * Get the tv credits for a person.
     * @param { number } personID
     * @return { Promise<PersonTVCreditsResponse> }
     * @see https://developers.themoviedb.org/3/people/get-person-tv-credits
     */
    public async tvCredits(personID: number): Promise<PersonTVCreditsResponse> {
        return this.sendGetRequest(`person/${personID}/tv_credits`);
    }

    /**
     * Get the movie and TV credits together in a single response.
     * @param { number } personID
     * @return { Promise<PersonCombinedCreditsResponse> }
     * @see https://developers.themoviedb.org/3/people/get-person-combined-credits
     */
    public async combinedCredits(personID: number): Promise<PersonCombinedCreditsResponse> {
        return this.sendGetRequest(`person/${personID}/combined_credits`);
    }

    /**
     * Get the external ids for a person.
     * @param { number } personID
     * @return { Promise<PersonExternalIDResponse> }
     * @see https://developers.themoviedb.org/3/people/get-person-external-ids
     */
    public async externalIDs(personID: number): Promise<PersonExternalIDResponse> {
        return this.sendGetRequest(`person/${personID}/external_ids`);
    }

    /**
     * Get the images for a person.
     * @param { number } personID
     * @return { Promise<PersonImagesResponse> }
     * @see https://developers.themoviedb.org/3/people/get-person-images
     */
    public async images(personID: number): Promise<PersonImagesResponse> {
        return this.sendGetRequest(`person/${personID}/images`);
    }

    /**
     * Get the images that this person has been tagged in.
     * @param { number } personID
     * @return { Promise<PersonTaggedImagesResponse> }
     * @see https://developers.themoviedb.org/3/people/get-tagged-images
     */
    public async taggedImages(personID: number): Promise<PersonTaggedImagesResponse> {
        return this.sendGetRequest(`person/${personID}/tagged_images`);
    }

    /**
     * Get a list of translations that have been created for a person.
     * @param { number } personID
     * @return { Promise<PersonTranslationsResponse> }
     * @see https://developers.themoviedb.org/3/people/get-person-translations
     */
    public async translations(personID: number): Promise<PersonTranslationsResponse> {
        return this.sendGetRequest(`person/${personID}/translations`);
    }

    /**
     * Get the most newly created person.
     * This is a live response and will continuously change.
     * @return { Promise<PersonDetailsResponse> }
     * @see https://developers.themoviedb.org/3/people/get-latest-person
     */
    public async latest(): Promise<PersonDetailsResponse> {
        return this.sendGetRequest(`person/latest`);
    }

}
