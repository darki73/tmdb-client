export interface MovieAlternativeTitle {
    iso_3166_1: string;
    title: string;
    type: string;
}

export interface MovieAlternativeTitlesResponse {
    id: number;
    titles: [MovieAlternativeTitle];
}
