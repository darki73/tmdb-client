export interface PersonMovieCreditBase {
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    vote_count: number;
    vote_average: number;
    popularity: number;
    genre_ids: [number];
    backdrop_path: string | null;
    poster_path: string | null;
    video: boolean;
    title: string;
    adult: boolean;
    release_date: string;
    credit_id: string;
}

export interface PersonMovieCreditCast extends PersonMovieCreditBase {
    character: string;
}

export interface PersonMovieCreditCrew extends PersonMovieCreditBase {
    department: string;
    job: string;
}

export interface PersonMovieCreditsResponse {
    id: number;
    cast: [PersonMovieCreditCast];
    crew: [PersonMovieCreditCrew];
}
