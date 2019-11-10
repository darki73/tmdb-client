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
     */
    public async api(): Promise<ConfigurationAPIResponse> {
        return this.sendGetRequest(`configuration`);
    }

    /**
     * Get the list of countries (ISO 3166-1 tags) used throughout TMDb.
     * @return { Promise<ConfigurationCountriesResponse> }
     */
    public async countries(): Promise<ConfigurationCountriesResponse> {
        return this.sendGetRequest('configuration/countries');
    }

    /**
     * Get a list of the jobs and departments we use on TMDb.
     * @return { Promise<ConfigurationJobsResponse> }
     */
    public async jobs(): Promise<ConfigurationJobsResponse> {
        return this.sendGetRequest('configuration/jobs');
    }

    /**
     * Get the list of languages (ISO 639-1 tags) used throughout TMDb.
     * @return { Promise<ConfigurationLanguagesResponse> }
     */
    public async languages(): Promise<ConfigurationLanguagesResponse> {
        return this.sendGetRequest('configuration/languages');
    }

    /**
     * Get a list of the officially supported translations on TMDb.
     * @return { Promise<ConfigurationPrimaryTranslationsResponse> }
     */
    public async primaryTranslations(): Promise<ConfigurationPrimaryTranslationsResponse> {
        return this.sendGetRequest('configuration/primary_translations');
    }

    /**
     * Get the list of timezones used throughout TMDb.
     * @return { Promise<ConfigurationTimezonesResponse> }
     */
    public async timezones(): Promise<ConfigurationTimezonesResponse> {
        return this.sendGetRequest('configuration/timezones');
    }

}
