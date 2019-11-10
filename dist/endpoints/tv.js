"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseEndpoint_1 = require("./baseEndpoint");
class TV extends baseEndpoint_1.BaseEndpoint {
    async details(tvID) {
        return this.sendGetRequest(`tv/${tvID}`);
    }
    async alternativeTitles(tvID) {
        return this.sendGetRequest(`tv/${tvID}/alternative_titles`);
    }
    async changes(tvID, parameters = {}) {
        return this.sendGetRequest(`tv/${tvID}/changes`, parameters);
    }
    async contentRatings(tvID) {
        return this.sendGetRequest(`tv/${tvID}/content_ratings`);
    }
    async credits(tvID) {
        return this.sendGetRequest(`tv/${tvID}/credits`);
    }
    async episodeGroup(tvID) {
        return this.sendGetRequest(`tv/${tvID}/episode_groups`);
    }
    async externalIDs(tvID) {
        return this.sendGetRequest(`tv/${tvID}/external_ids`);
    }
    async images(tvID, parameters = {}) {
        return this.sendGetRequest(`tv/${tvID}/images`, parameters);
    }
    async keywords(tvID) {
        return this.sendGetRequest(`tv/${tvID}/keywords`);
    }
    async recommendations(tvID) {
        return this.sendGetRequest(`tv/${tvID}/recommendations`);
    }
    async reviews(tvID) {
        return this.sendGetRequest(`tv/${tvID}/reviews`);
    }
    async screenedTheatrically(tvID) {
        return this.sendGetRequest(`tv/${tvID}/screened_theatrically`);
    }
    async similar(tvID) {
        return this.sendGetRequest(`tv/${tvID}/similar`);
    }
    async translations(tvID) {
        return this.sendGetRequest(`tv/${tvID}/translations`);
    }
    async videos(tvID) {
        return this.sendGetRequest(`tv/${tvID}/videos`);
    }
    async latest() {
        return this.sendGetRequest(`tv/latest`);
    }
    async airingToday() {
        return this.sendGetRequest(`tv/airing_today`);
    }
    async onTheAir() {
        return this.sendGetRequest(`tv/on_the_air`);
    }
    async popular() {
        return this.sendGetRequest(`tv/popular`);
    }
    async topRated() {
        return this.sendGetRequest(`tv/top_rated`);
    }
}
exports.TV = TV;
//# sourceMappingURL=tv.js.map