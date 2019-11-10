"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseEndpoint_1 = require("./baseEndpoint");
class Discover extends baseEndpoint_1.BaseEndpoint {
    constructor() {
        super(...arguments);
        this.onlyTheseGenres = null;
        this.withoutTheseGenres = null;
        this.onlyTheseCompanies = null;
    }
    withGenres(genres) {
        this.onlyTheseGenres = genres;
        return this;
    }
    withoutGenres(genres) {
        this.withoutTheseGenres = genres;
        return this;
    }
    withCompanies(companies) {
        this.onlyTheseCompanies = companies;
        return this;
    }
    async movie(parameters = {}) {
        return this.sendGetRequest(`discover/movie`, this.mergeParameters(parameters));
    }
    async tv(parameters = {}) {
        return this.sendGetRequest('discover/tv', this.mergeParameters(parameters));
    }
    mergeParameters(parameters) {
        if (this.onlyTheseGenres !== null) {
            parameters.with_genres = this.onlyTheseGenres.join(',');
        }
        if (this.withoutTheseGenres !== null) {
            parameters.without_genres = this.withoutTheseGenres.join(',');
        }
        if (this.onlyTheseGenres !== null) {
            parameters.with_companies = this.onlyTheseCompanies.join(',');
        }
        return parameters;
    }
}
exports.Discover = Discover;
//# sourceMappingURL=discover.js.map