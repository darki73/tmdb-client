export interface PersonTranslationData {
    biography: string;
}
export interface PersonTranslation {
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    data: PersonTranslationData;
    english_name: string;
}
export interface PersonTranslationsResponse {
    id: number;
    translations: [PersonTranslation];
}
