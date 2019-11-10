export interface TVTranslationData {
    name: string;
    overview: string;
    homepage: string;
}
export interface TVTranslation {
    iso_3166_1: string;
    iso_639_1: string;
    name: string;
    english_name: string;
    data: TVTranslationData;
}
export interface TVTranslationsResponse {
    id: number;
    translations: [TVTranslation];
}
