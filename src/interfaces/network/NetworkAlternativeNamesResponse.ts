export interface NetworkAlternativeName {
    name: string;
    type: string;
}

export interface NetworkAlternativeNamesResponse {
    id: number;
    results: [NetworkAlternativeName];
}
