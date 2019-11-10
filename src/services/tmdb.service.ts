import { EndpointConfiguration } from '../interfaces/common/EndpointConfiguration';
import {
    Certification as CertificationEndpoint,
    Changes as ChangesEndpoint,
    Company as CompanyEndpoint,
    Configuration as ConfigurationEndpoint,
    Credit as CreditEndpoint,
    Discover as DiscoverEndpoint,
    Genre as GenreEndpoint,
    Movie as MovieEndpoint,
    Network as NetworkEndpoint,
    Trending as TrendingEndpoint,
    Person as PersonEndpoint,
    Review as ReviewEndpoint,
    Search as SearchEndpoint,
    TV as TVEndpoint,
    TVSeason as TVSeasonEndpoint,
    TVEpisode as TVEpisodeEndpoint,
} from '../endpoints';

export class TMDBService {
    /**
     * Whether or not we want to use `https`
     * @var boolean
     */
    readonly secure: boolean = true;

    /**
     * The main API url
     * @var string
     */
    private host: string = 'api.themoviedb.org';

    /**
     * API Version we are going to use
     * @var number
     */
    private version: number = 3;

    /**
     * API Key we are going to use
     * @var string
     */
    readonly key: string;

    /**
     * Whether we want to include adult media in the response
     * @var boolean
     */
    private adult: boolean = false;

    /**
     * Base API URL
     * @var string|null
     */
    private baseUrl: string | null;

    /**
     * Predefined Endpoint Configuration Object
     * @var EndpointConfiguration
     */
    private endpointConfiguration: EndpointConfiguration;

    /**
     * Certifications Endpoint Instance
     * @var CertificationEndpoint
     */
    public certifications: CertificationEndpoint;

    /**
     * Changes Endpoint Instance
     * @var ChangesEndpoint
     */
    public changes: ChangesEndpoint;

    /**
     * Companies Endpoint Instance
     * @var CompanyEndpoint
     */
    public company: CompanyEndpoint;

    /**
     * Configuration Endpoint Instance
     * @var ConfigurationEndpoint
     */
    public configuration: ConfigurationEndpoint;

    /**
     * Credit Endpoint Instance
     * @var CreditEndpoint
     */
    public credit: CreditEndpoint;

    /**
     * Discover Endpoint Instance
     * @var DiscoverEndpoint
     */
    public discover: DiscoverEndpoint;

    /**
     * Genre Endpoint Instance
     * @var GenreEndpoint
     */
    public genre: GenreEndpoint;

    /**
     * Movie Endpoint Instance
     * @var MovieEndpoint
     */
    public movie: MovieEndpoint;

    /**
     * Network Endpoint Instance
     * @var NetworkEndpoint
     */
    public network: NetworkEndpoint;

    /**
     * Trending Endpoint Instance
     * @var TrendingEndpoint
     */
    public trending: TrendingEndpoint;

    /**
     * Person Endpoint Instance
     * @var PersonEndpoint
     */
    public person: PersonEndpoint;

    /**
     * Search Endpoint Instance
     * @var SearchEndpoint
     */
    public search: SearchEndpoint;

    /**
     * Review Endpoint Instance
     * @var ReviewEndpoint
     */
    public review: ReviewEndpoint;

    /**
     * TV Endpoint Instance
     * @var TVEndpoint
     */
    public tv: TVEndpoint;

    /**
     * TV Season Endpoint Instance
     * @var TVSeasonEndpoint
     */
    public tvSeason: TVSeasonEndpoint;

    /**
     * TV Episode Endpoint Instance
     * @var TVEpisodeEndpoint
     */
    public tvEpisode: TVEpisodeEndpoint;

    /**
     * Class Constructor
     * @param apiKey
     * @param secure
     * @param version
     * @param host
     */
    public constructor(apiKey: string, secure: boolean = true, version: number = 3, host: string = 'api.themoviedb.org') {
        this.key = apiKey;
        this.secure = secure;
        this.version = version;
        this.host = host;
        this.buildBaseURL();
    }

    /**
     * By default, everything marked with adult will be excluded.
     * This options allows to include adult content in the response.
     * @return TMDBService
     */
    public includeAdult(): TMDBService {
        this.adult = true;
        this.updateClassConfiguration();
        return this;
    }

    /**
     * Build Base API URL
     * @return TMDBService
     */
    private buildBaseURL(): TMDBService {
        const protocol = this.secure ? 'https:' : 'http:';
        const { host, version } = this;
        this.baseUrl = `${protocol}//${host}/${version}`;
        this.updateClassConfiguration();
        return this;
    }

    /**
     * Load all endpoints as class properties
     */
    private bootEndpoints(): TMDBService {
        this.certifications = new CertificationEndpoint(this.endpointConfiguration);
        this.changes = new ChangesEndpoint(this.endpointConfiguration);
        this.company = new CompanyEndpoint(this.endpointConfiguration);
        this.configuration = new ConfigurationEndpoint(this.endpointConfiguration);
        this.credit = new CreditEndpoint(this.endpointConfiguration);
        this.discover = new DiscoverEndpoint(this.endpointConfiguration);
        this.genre = new GenreEndpoint(this.endpointConfiguration);
        this.movie = new MovieEndpoint(this.endpointConfiguration);
        this.network = new NetworkEndpoint(this.endpointConfiguration);
        this.trending = new TrendingEndpoint(this.endpointConfiguration);
        this.person = new PersonEndpoint(this.endpointConfiguration);
        this.review = new ReviewEndpoint(this.endpointConfiguration);
        this.search = new SearchEndpoint(this.endpointConfiguration);
        this.tv = new TVEndpoint(this.endpointConfiguration);
        this.tvSeason = new TVSeasonEndpoint(this.endpointConfiguration);
        this.tvEpisode = new TVEpisodeEndpoint(this.endpointConfiguration);
        return this;
    }

    /**
     * Build endpoints configuration
     * @return TMDBService
     */
    private buildEndpointsConfiguration(): TMDBService {
        this.endpointConfiguration = {
            host: this.baseUrl,
            key: this.key,
            adult: this.adult,
        };
        return this;
    }

    /**
     * Update Class Configuration
     * @return TMDBService
     */
    private updateClassConfiguration(): TMDBService {
        this.buildEndpointsConfiguration();
        this.bootEndpoints();
        return this;
    }

}
