export interface CompanyLogo {
    aspect_ratio: number;
    file_path: string | null;
    height: number;
    id: number;
    file_type: string;
    vote_average: number;
    vote_count: number;
    width: number;
}
export interface CompanyImagesResponse {
    id: number;
    logos: [CompanyLogo];
}
