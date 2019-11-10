export interface TVEpisodeCrew {
    id: number;
    credit_id: string;
    name: string;
    department: string;
    job: string;
    profile_path: string | null;
}

export interface TVEpisodeGuestStar {
    id: number;
    name: string;
    credit_id: string;
    character: string;
    order: number;
    profile_path: string | null;
}

export interface TVEpisodeDetailsResponse {
    air_date: string;
    crew: [TVEpisodeCrew];
    episode_number: number;
    guest_stars: [TVEpisodeGuestStar];
    name: string;
    overview: string;
    id: number;
    production_code: string | null;
    season_number: number;
    still_path: string | null;
    vote_average: number;
    vote_count: number;
}
