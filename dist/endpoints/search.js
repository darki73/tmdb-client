"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseEndpoint_1 = require("./baseEndpoint");
class Search extends baseEndpoint_1.BaseEndpoint {
    async company(query) {
        return this.sendGetRequest('search/company', { query });
    }
    async collection(query) {
        return this.sendGetRequest('search/collection', { query });
    }
    async keyword(query) {
        return this.sendGetRequest('search/keyword', { query });
    }
    async movie(query, parameters = {}) {
        return this.sendGetRequest('search/movie', Object.assign({ query }, parameters));
    }
    async multi(query, parameters = {}) {
        return this.sendGetRequest('search/multi', Object.assign({ query }, parameters));
    }
    async people(query, parameters = {}) {
        return this.sendGetRequest('search/people', Object.assign({ query }, parameters));
    }
    async tv(query, parameters = {}) {
        return this.sendGetRequest('search/tv', Object.assign({ query }, parameters));
    }
}
exports.Search = Search;
//# sourceMappingURL=search.js.map