export interface TVAlternativeTitle {
    title: string;
    iso_3166_1: string;
    type: string;
}

export interface TVAlternativeTitlesResponse {
    id: number;
    results: [TVAlternativeTitle];
}
