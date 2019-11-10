import { MovieDetailsResponse } from '../movie';
import { TVDetailsResponse } from '../tv';

export interface PersonBaseTaggedImage {
    aspect_ratio: number;
    file_path: string;
    height: number;
    id: string;
    iso_639_1: null | string;
    vote_average: number;
    vote_count: number;
    width: number;
    image_type: string;
    media_type: string;
}

export interface PersonTaggedMovieImage extends PersonBaseTaggedImage {
    media: MovieDetailsResponse;
}

export interface PersonTaggedTVImage extends PersonBaseTaggedImage {
    media: TVDetailsResponse;
}

export interface PersonTaggedImagesResponse {
    id: number;
    page: number;
    results: [PersonTaggedMovieImage | PersonTaggedTVImage];
    total_pages: number;
    total_results: number;
}
