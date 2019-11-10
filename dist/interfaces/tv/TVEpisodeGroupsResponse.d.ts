export interface TVNetwork {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}
export interface TVEpisodeGroup {
    description: string;
    episode_count: number;
    group_count: number;
    id: string;
    name: string;
    network: TVNetwork | null;
    type: number;
}
export interface TVEpisodeGroupsResponse {
    id: number;
    results: [TVEpisodeGroup];
}
