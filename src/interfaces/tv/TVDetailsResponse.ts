import { Genre } from '../genres';
import { NetworkDetailsResponse } from '../network';

export interface TVCreatedBy {
    id: number;
    credit_id: string;
    name: string;
    gender: number;
    profile_path: string;
}

export interface TVProductionCompany {
    id: number;
    logo_path: null | string;
    name: string;
    origin_country: string;
}

export interface TVEpisode {
    air_date: string;
    episode_number: number;
    id: number;
    name: string;
    overview: string;
    production_code: string;
    season_number: number;
    show_id: number;
    still_path: string;
    vote_average: number;
    vote_count: number;
}

export interface TVSeason {
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string;
    season_number: number;
}

export interface TVDetailsResponse {
    backdrop_path: string | null;
    created_by: [TVCreatedBy];
    episode_run_time: [number];
    first_air_date: string;
    genres: [Genre];
    homepage: string;
    id: number;
    in_production: boolean;
    languages: [string];
    last_air_date: string;
    last_episode_to_air: TVEpisode | null;
    name: string;
    next_episode_to_air: TVEpisode | null;
    networks: [NetworkDetailsResponse];
    number_of_episodes: number;
    number_of_seasons: number;
    origin_country: [string];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    production_companies: [TVProductionCompany];
    seasons: [TVSeason];
    status: string;
    type: string;
    vote_average: number;
    vote_count: number;
}
