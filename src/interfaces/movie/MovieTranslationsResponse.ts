export interface MovieTranslationData {
    title: string;
    overview: string;
    homepage: string;
}

export interface MovieTranslation {
    iso_3166_1: string;
    iso_639_1: string;
    name: string;
    english_name: string;
    data: MovieTranslationData;
}

export interface MovieTranslationsResponse {
    id: number;
    translations: [MovieTranslation];
}
