export interface TVContentRating {
    iso_3166_1: string;
    rating: string;
}
export interface TVContentRatingsResponse {
    id: number;
    results: [TVContentRating];
}
