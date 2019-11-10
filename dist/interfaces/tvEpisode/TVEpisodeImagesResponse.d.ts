export interface TVEpisodeImagesStill {
    aspect_ratio: number;
    file_path: string;
    height: number;
    iso_639_1: null | string;
    vote_average: number | number;
    vote_count: number;
    width: number;
}
export interface TVEpisodeImagesResponse {
    id: number;
    stills: [TVEpisodeImagesStill];
}
