import { BaseEndpoint, QueryParameters, QueryDateLimiter } from './baseEndpoint';
import { PersonDetailsResponse, PersonChangesResponse, PersonMovieCreditsResponse, PersonTVCreditsResponse, PersonCombinedCreditsResponse, PersonExternalIDResponse, PersonImagesResponse, PersonTaggedImagesResponse, PersonTranslationsResponse } from '../interfaces/person';
export declare class Person extends BaseEndpoint {
    details(personID: number, parameters?: QueryParameters): Promise<PersonDetailsResponse>;
    changes(personID: number, parameters?: QueryDateLimiter): Promise<PersonChangesResponse>;
    movieCredits(personID: number): Promise<PersonMovieCreditsResponse>;
    tvCredits(personID: number): Promise<PersonTVCreditsResponse>;
    combinedCredits(personID: number): Promise<PersonCombinedCreditsResponse>;
    externalIDs(personID: number): Promise<PersonExternalIDResponse>;
    images(personID: number): Promise<PersonImagesResponse>;
    taggedImages(personID: number): Promise<PersonTaggedImagesResponse>;
    translations(personID: number): Promise<PersonTranslationsResponse>;
    latest(): Promise<PersonDetailsResponse>;
}
