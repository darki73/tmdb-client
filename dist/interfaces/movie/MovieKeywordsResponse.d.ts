export interface MovieKeyword {
    id: number;
    name: string;
}
export interface MovieKeywordsResponse {
    id: number;
    keywords: [MovieKeyword];
}
