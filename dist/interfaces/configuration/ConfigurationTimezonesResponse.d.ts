export interface ConfigurationTimezone {
    iso_3166_1: string;
    zones: string[];
}
export interface ConfigurationTimezonesResponse {
    [index: number]: ConfigurationTimezone;
}
