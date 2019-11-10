"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseEndpoint_1 = require("./baseEndpoint");
class Movie extends baseEndpoint_1.BaseEndpoint {
    async details(movieID, parameters = {}, appendToResponse = null) {
        return this.sendGetRequest(`movie/${movieID}`, this.buildRequestParameters(parameters, appendToResponse));
    }
    async alternativeTitles(movieID, parameters = {}) {
        return this.sendGetRequest(`movie/${movieID}/alternative_titles`, parameters);
    }
    async changes(movieID, parameters = {}) {
        return this.sendGetRequest(`movie/${movieID}/changes`, parameters);
    }
    async credits(movieID) {
        return this.sendGetRequest(`movie/${movieID}/credits`);
    }
    async externalIDs(movieID) {
        return this.sendGetRequest(`movie/${movieID}/external_ids`);
    }
    async images(movieID, parameters = {}) {
        return this.sendGetRequest(`movie/${movieID}/images`, parameters);
    }
    async keywords(movieID) {
        return this.sendGetRequest(`movie/${movieID}/keywords`);
    }
    async releaseDates(movieID) {
        return this.sendGetRequest(`movie/${movieID}/release_dates`);
    }
    async videos(movieID) {
        return this.sendGetRequest(`movie/${movieID}/videos`);
    }
    async translations(movieID) {
        return this.sendGetRequest(`movie/${movieID}/translations`);
    }
    async recommendations(movieID) {
        return this.sendGetRequest(`movie/${movieID}/recommendations`);
    }
    async similar(movieID) {
        return this.sendGetRequest(`movie/${movieID}/similar`);
    }
    async reviews(movieID) {
        return this.sendGetRequest(`movie/${movieID}/reviews`);
    }
    async lists(movieID) {
        return this.sendGetRequest(`movie/${movieID}/lists`);
    }
    async latest() {
        return this.sendGetRequest(`movie/latest`);
    }
    async nowPlaying(parameters = {}) {
        return this.sendGetRequest(`movie/now_playing`, parameters);
    }
    async popular(parameters = {}) {
        return this.sendGetRequest(`movie/popular`, parameters);
    }
    async topRated(parameters = {}) {
        return this.sendGetRequest(`movie/popular`, parameters);
    }
    async upcoming(parameters = {}) {
        return this.sendGetRequest(`movie/upcoming`, parameters);
    }
    buildRequestParameters(parameters = {}, appendToResponse = null) {
        if (appendToResponse !== null) {
            parameters.append_to_response = appendToResponse.join(',');
        }
        return parameters;
    }
}
exports.Movie = Movie;
//# sourceMappingURL=movie.js.map