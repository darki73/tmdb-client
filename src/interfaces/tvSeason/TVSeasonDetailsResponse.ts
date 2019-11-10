export interface TVSeasonEpisode {
    air_date: string;
    episode_number: number;
    name: string;
    overview: string;
    id: number;
    production_code: string | null;
    season_number: number;
    still_path: string | null;
    vote_average: number;
    vote_count: number;
    // guest_stars TODO: Needs to be implemented
    // crew TODO: Needs to be implemented
}

export interface TVSeasonDetailsResponse {
    id: number;
    _id: string;
    air_date: string;
    name: string;
    overview: string;
    poster_path: string | null;
    season_number: number;
    episodes: [TVSeasonEpisode];
}
