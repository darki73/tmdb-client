"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const endpoints_1 = require("../endpoints");
class TMDBService {
    constructor(apiKey, secure = true, version = 3, host = 'api.themoviedb.org') {
        this.secure = true;
        this.host = 'api.themoviedb.org';
        this.version = 3;
        this.adult = false;
        this.key = apiKey;
        this.secure = secure;
        this.version = version;
        this.host = host;
        this.buildBaseURL();
    }
    includeAdult() {
        this.adult = true;
        this.updateClassConfiguration();
        return this;
    }
    buildBaseURL() {
        const protocol = this.secure ? 'https:' : 'http:';
        const { host, version } = this;
        this.baseUrl = `${protocol}//${host}/${version}`;
        this.updateClassConfiguration();
        return this;
    }
    bootEndpoints() {
        this.certifications = new endpoints_1.Certification(this.endpointConfiguration);
        this.changes = new endpoints_1.Changes(this.endpointConfiguration);
        this.company = new endpoints_1.Company(this.endpointConfiguration);
        this.configuration = new endpoints_1.Configuration(this.endpointConfiguration);
        this.credit = new endpoints_1.Credit(this.endpointConfiguration);
        this.discover = new endpoints_1.Discover(this.endpointConfiguration);
        this.genre = new endpoints_1.Genre(this.endpointConfiguration);
        this.movie = new endpoints_1.Movie(this.endpointConfiguration);
        this.network = new endpoints_1.Network(this.endpointConfiguration);
        this.trending = new endpoints_1.Trending(this.endpointConfiguration);
        this.person = new endpoints_1.Person(this.endpointConfiguration);
        this.review = new endpoints_1.Review(this.endpointConfiguration);
        this.search = new endpoints_1.Search(this.endpointConfiguration);
        this.tv = new endpoints_1.TV(this.endpointConfiguration);
        this.tvSeason = new endpoints_1.TVSeason(this.endpointConfiguration);
        this.tvEpisode = new endpoints_1.TVEpisode(this.endpointConfiguration);
        return this;
    }
    buildEndpointsConfiguration() {
        this.endpointConfiguration = {
            host: this.baseUrl,
            key: this.key,
            adult: this.adult,
        };
        return this;
    }
    updateClassConfiguration() {
        this.buildEndpointsConfiguration();
        this.bootEndpoints();
        return this;
    }
}
exports.TMDBService = TMDBService;
//# sourceMappingURL=tmdb.service.js.map