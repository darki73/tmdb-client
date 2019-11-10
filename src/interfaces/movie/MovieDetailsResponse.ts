import { CollectionDetailsResponse } from '../collections';
import { ConfigurationLanguage } from '../configuration';
import { Genre } from '../genres';
import { MovieTranslationsResponse } from './MovieTranslationsResponse';

export interface MovieDetailsProductionCompany {
    name: string;
    id: number;
    logo_path: string | null;
    origin_country: string;
}

export interface MovieDetailsProductionCountry {
    iso_3166_1: string;
    name: string;
}

export interface MovieDetailsResponse {
    adult: boolean;
    backdrop_path: string | null;
    belongs_to_collection: CollectionDetailsResponse | null;
    budget: number;
    genres: [Genre];
    homepage: string | null;
    id: number;
    imdb_id: string | null;
    original_language: string;
    original_title: string;
    overview: string | null;
    popularity: number;
    poster_path: string | null;
    production_companies: [MovieDetailsProductionCompany];
    production_countries: [MovieDetailsProductionCountry];
    release_date: string;
    revenue: number;
    runtime: number | null;
    spoken_languages: [ConfigurationLanguage];
    status: 'Rumored' | 'Planned' | 'In Production' | 'Post Production' | 'Released' | 'Canceled';
    tagline: string | null;
    video: boolean;
    vote_average: number;
    vote_count: number;
    translations?: MovieTranslationsResponse;
}
