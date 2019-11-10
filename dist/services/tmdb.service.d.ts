import { Certification as CertificationEndpoint, Changes as ChangesEndpoint, Company as CompanyEndpoint, Configuration as ConfigurationEndpoint, Credit as CreditEndpoint, Discover as DiscoverEndpoint, Genre as GenreEndpoint, Movie as MovieEndpoint, Network as NetworkEndpoint, Trending as TrendingEndpoint, Person as PersonEndpoint, Review as ReviewEndpoint, Search as SearchEndpoint, TV as TVEndpoint, TVSeason as TVSeasonEndpoint, TVEpisode as TVEpisodeEndpoint } from '../endpoints';
export declare class TMDBService {
    readonly secure: boolean;
    private host;
    private version;
    readonly key: string;
    private adult;
    private baseUrl;
    private endpointConfiguration;
    certifications: CertificationEndpoint;
    changes: ChangesEndpoint;
    company: CompanyEndpoint;
    configuration: ConfigurationEndpoint;
    credit: CreditEndpoint;
    discover: DiscoverEndpoint;
    genre: GenreEndpoint;
    movie: MovieEndpoint;
    network: NetworkEndpoint;
    trending: TrendingEndpoint;
    person: PersonEndpoint;
    search: SearchEndpoint;
    review: ReviewEndpoint;
    tv: TVEndpoint;
    tvSeason: TVSeasonEndpoint;
    tvEpisode: TVEpisodeEndpoint;
    constructor(apiKey: string, secure?: boolean, version?: number, host?: string);
    includeAdult(): TMDBService;
    private buildBaseURL;
    private bootEndpoints;
    private buildEndpointsConfiguration;
    private updateClassConfiguration;
}
