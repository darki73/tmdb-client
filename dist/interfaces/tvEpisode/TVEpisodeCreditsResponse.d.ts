import { TVEpisodeCrew, TVEpisodeGuestStar } from './TVEpisodeDetailsResponse';
export interface TVEpisodeCreditCast {
    character: string;
    credit_id: string;
    gender: number;
    id: number;
    name: string;
    order: number;
    profile_path: string | null;
}
export interface TVEpisodeCreditsResponse {
    id: number;
    cast: [TVEpisodeCreditCast];
    crew: [TVEpisodeCrew];
    guest_stars: [TVEpisodeGuestStar];
}
