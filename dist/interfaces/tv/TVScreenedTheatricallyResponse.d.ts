export interface TVScreenedTheatrically {
    id: number;
    season_number: number;
    episode_number: number;
}
export interface TVScreenedTheatricallyResponse {
    id: number;
    results: [TVScreenedTheatrically];
}
