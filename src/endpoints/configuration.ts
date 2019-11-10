import { BaseEndpoint } from './baseEndpoint';
import {
    ConfigurationAPIResponse,
    ConfigurationCountriesResponse,
    ConfigurationJobsResponse,
    ConfigurationLanguagesResponse,
    ConfigurationPrimaryTranslationsResponse, ConfigurationTimezonesResponse,
} from '../interfaces/configuration';

/**
 * Configuration Endpoint Class
 */
export class Configuration extends BaseEndpoint {

    /**
     * Get the system wide configuration information.
     * Some elements of the API require some knowledge of this configuration data.
     * @return { Promise<ConfigurationAPIResponse> }
     * @see https://developers.themoviedb.org/3/configuration/get-api-configuration
     */
    public async api(): Promise<ConfigurationAPIResponse> {
        return this.sendGetRequest(`configuration`);
    }

    /**
     * Get the list of countries (ISO 3166-1 tags) used throughout TMDb.
     * @return { Promise<ConfigurationCountriesResponse> }
     * @see https://developers.themoviedb.org/3/configuration/get-countries
     */
    public async countries(): Promise<ConfigurationCountriesResponse> {
        return this.sendGetRequest('configuration/countries');
    }

    /**
     * Get a list of the jobs and departments we use on TMDb.
     * @return { Promise<ConfigurationJobsResponse> }
     * @see https://developers.themoviedb.org/3/configuration/get-jobs
     */
    public async jobs(): Promise<ConfigurationJobsResponse> {
        return this.sendGetRequest('configuration/jobs');
    }

    /**
     * Get the list of languages (ISO 639-1 tags) used throughout TMDb.
     * @return { Promise<ConfigurationLanguagesResponse> }
     * @see https://developers.themoviedb.org/3/configuration/get-languages
     */
    public async languages(): Promise<ConfigurationLanguagesResponse> {
        return this.sendGetRequest('configuration/languages');
    }

    /**
     * Get a list of the officially supported translations on TMDb.
     * @return { Promise<ConfigurationPrimaryTranslationsResponse> }
     * @see https://developers.themoviedb.org/3/configuration/get-primary-translations
     */
    public async primaryTranslations(): Promise<ConfigurationPrimaryTranslationsResponse> {
        return this.sendGetRequest('configuration/primary_translations');
    }

    /**
     * Get the list of timezones used throughout TMDb.
     * @return { Promise<ConfigurationTimezonesResponse> }
     * @see https://developers.themoviedb.org/3/configuration/get-timezones
     */
    public async timezones(): Promise<ConfigurationTimezonesResponse> {
        return this.sendGetRequest('configuration/timezones');
    }

}
