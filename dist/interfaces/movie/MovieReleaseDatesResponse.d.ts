export interface MovieReleaseCountryDates {
    certification: string;
    iso_639_1: string;
    release_date: string;
    type: number;
    note: string;
}
export interface MovieReleaseCountry {
    iso_3166_1: string;
    release_dates: [MovieReleaseCountryDates];
}
export interface MovieReleaseDates {
    [index: number]: MovieReleaseCountry;
}
export interface MovieReleaseDatesResponse {
    id: number;
    results: [MovieReleaseDates];
}
