export interface MovieChange {
    key: string;
    items: object;
}

export interface MovieChangesResponse {
    changes: [MovieChange];
}
