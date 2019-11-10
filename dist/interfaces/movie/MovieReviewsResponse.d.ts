export interface MovieReview {
    id: string;
    author: string;
    content: string;
    url: string;
}
export interface MovieReviewsResponse {
    id: number;
    page: number;
    results: [MovieReview];
    total_pages: number;
    total_results: number;
}
