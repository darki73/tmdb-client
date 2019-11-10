export interface TVCreditBase {
    credit_id: string;
    gender: number | null;
    id: number;
    name: string;
    profile_path: string | null;
}

export interface TVCreditCast extends TVCreditBase {
    character: string;
    order: number;
}

export interface TVCreditCrew extends TVCreditBase {
    department: string;
    job: string;
}

export interface TVCreditsResponse {
    id: number;
    cast: [TVCreditCast];
    crew: [TVCreditCrew];
}
