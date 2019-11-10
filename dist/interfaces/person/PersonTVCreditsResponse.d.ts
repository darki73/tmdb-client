export interface PersonTVCreditBase {
    credit_id: string;
    original_name: string;
    id: number;
    genre_ids: [number];
    name: string;
    poster_path: string | null;
    backdrop_path: string | null;
    vote_count: number;
    vote_average: number;
    popularity: number;
    first_air_date: string;
    overview: string;
    origin_country: [string];
    original_language: string;
    episode_count: number;
}
export interface PersonTVCreditCast extends PersonTVCreditBase {
    character: string;
}
export interface PersonTVCreditCrew extends PersonTVCreditBase {
    department: string;
    job: string;
}
export interface PersonTVCreditsResponse {
    id: number;
    cast: [PersonTVCreditCast];
    crew: [PersonTVCreditCrew];
}
