export interface ConfigurationLanguage {
    iso_639_1: string;
    english_name: string;
    name: string;
}

export interface ConfigurationLanguagesResponse {
    [index: number]: ConfigurationLanguage;
}
