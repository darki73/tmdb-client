export interface MovieAccountStatesResponse {
    id: number;
    favorite: boolean;
    rated: {} | boolean; // TODO: Find the structure for the rated object
    watchlist: boolean;
}
