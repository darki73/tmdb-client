export interface PersonChangeProfile {
    file_path: string;
}
export interface PersonChangeOriginalValue {
    profile: PersonChangeProfile;
}
export interface PersonChangeItem {
    id: string;
    action: string;
    time: string;
    original_value: PersonChangeOriginalValue;
}
export interface PersonChange {
    key: string;
    items: [PersonChangeItem];
}
export interface PersonChangesResponse {
    changes: [PersonChange];
}
