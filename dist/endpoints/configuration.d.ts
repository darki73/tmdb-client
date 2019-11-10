import { BaseEndpoint } from './baseEndpoint';
import { ConfigurationAPIResponse, ConfigurationCountriesResponse, ConfigurationJobsResponse, ConfigurationLanguagesResponse, ConfigurationPrimaryTranslationsResponse, ConfigurationTimezonesResponse } from '../interfaces/configuration';
export declare class Configuration extends BaseEndpoint {
    api(): Promise<ConfigurationAPIResponse>;
    countries(): Promise<ConfigurationCountriesResponse>;
    jobs(): Promise<ConfigurationJobsResponse>;
    languages(): Promise<ConfigurationLanguagesResponse>;
    primaryTranslations(): Promise<ConfigurationPrimaryTranslationsResponse>;
    timezones(): Promise<ConfigurationTimezonesResponse>;
}
