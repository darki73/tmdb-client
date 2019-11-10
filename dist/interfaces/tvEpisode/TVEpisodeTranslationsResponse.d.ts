export interface TVEpisodeTranslationData {
    name: string;
    overview: string;
}
export interface TVEpisodeTranslation {
    iso_3166_1: string;
    iso_639_1: string;
    name: string;
    english_name: string;
    data: TVEpisodeTranslationData;
}
export interface TVEpisodeTranslationsResponse {
    id: number;
    translations: [TVEpisodeTranslation];
}
