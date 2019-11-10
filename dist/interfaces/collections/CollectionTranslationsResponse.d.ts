export interface CollectionTranslationsData {
    title: string;
    overview: string;
    homepage: string;
}
export interface CollectionTranslations {
    iso_3166_1: string;
    iso_639_1: string;
    name: string;
    english_name: string;
    data: CollectionTranslationsData;
}
export interface CollectionTranslationsResponse {
    id: number;
    translations: [CollectionTranslations];
}
