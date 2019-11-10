export interface TVChangeItem {
    id: string;
    action: string;
    time: string;
}
export interface TVChange {
    key: string;
    items: [TVChangeItem];
}
export interface TVChangesResponse {
    changes: [TVChange];
}
