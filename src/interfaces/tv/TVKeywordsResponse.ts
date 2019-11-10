export interface TVKeyword {
    id: number;
    name: string;
}

export interface TVKeywordsResponse {
    id: number;
    results: [TVKeyword];
}
