export interface NetworkImage {
    aspect_ratio: number;
    file_path: string;
    height: number;
    id: string;
    file_type: string;
    vote_average: number;
    vote_count: number;
    width: number;
}

export interface NetworkImagesResponse {
    id: number;
    logos: [NetworkImage];
}
