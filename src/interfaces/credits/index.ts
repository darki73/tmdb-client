export interface CreditsMediaSeason {
    air_date: string;
    poster_path: string | null;
    season_number: number;
}

export interface CreditsMedia {
    id: number;
    name: string;
    original_name: string;
    character: string;
    // episodes: [CreditsMediaEpisode];
    // seasons: [CreditsMediaSeason];
}

export interface CreditsPerson {
    adult: boolean;
    gender: number;
    name: string;
    id: number;
    profile_path: string | null;
    popularity: number | null;
}

export interface CreditsResponse {
    credit_type: string;
    department: string;
    job: string;
    media: CreditsMedia;
    media_type: string;
    id: string;
    person: CreditsPerson;
}
