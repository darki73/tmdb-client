export interface ConfigurationCountry {
    iso_3166_1: string;
    english_name: string;
}

export interface ConfigurationCountriesResponse {
    [index: number]: ConfigurationCountry;
}
