export interface TVReview {
    author: string;
    content: string;
    id: string;
    url: string;
}

export interface TVReviewsResponse {
    page: number;
    results: [TVReview];
    total_pages: number;
    total_response: number;
}
