export interface TVSeasonCreditBase {
    credit_id: string;
    gender: number | null;
    id: number;
    name: string;
    profile_path: string | null;
}
export interface TVSeasonCreditCast extends TVSeasonCreditBase {
    character: string;
    order: number;
}
export interface TVSeasonCreditCrew extends TVSeasonCreditBase {
    department: string;
    job: string;
}
export interface TVSeasonCreditsResponse {
    id: number;
    cast: [TVSeasonCreditCast];
    crew: [TVSeasonCreditCrew];
}
