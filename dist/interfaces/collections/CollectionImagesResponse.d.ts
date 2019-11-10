export interface CollectionImagesDetails {
    aspect_ratio: number;
    file_path: string;
    height: number;
    iso_639_1: string | null;
    vote_average: number;
    vote_count: number;
    width: number;
}
export interface CollectionImagesResponse {
    id: number;
    backdrops: [CollectionImagesDetails];
    posters: [CollectionImagesDetails];
}
