"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseEndpoint_1 = require("./baseEndpoint");
class TVEpisode extends baseEndpoint_1.BaseEndpoint {
    constructor() {
        super(...arguments);
        this.showID = null;
        this.seasonNumber = null;
    }
    show(showID) {
        this.showID = showID;
        return this;
    }
    season(seasonNumber) {
        this.seasonNumber = seasonNumber;
        return this;
    }
    async details(episodeNumber, appendToResponse = []) {
        this.performChecks();
        return this.sendGetRequest(`tv/${this.showID}/season/${this.seasonNumber}/episode/${episodeNumber}`, {
            append_to_response: appendToResponse,
        });
    }
    async credits(episodeNumber) {
        this.performChecks();
        return this.sendGetRequest(`tv/${this.showID}/season/${this.seasonNumber}/episode/${episodeNumber}/credits`);
    }
    async externalIDs(episodeNumber) {
        this.performChecks();
        return this.sendGetRequest(`tv/${this.showID}/season/${this.seasonNumber}/episode/${episodeNumber}/external_ids`);
    }
    async images(episodeNumber) {
        this.performChecks();
        return this.sendGetRequest(`tv/${this.showID}/season/${this.seasonNumber}/episode/${episodeNumber}/images`);
    }
    async translations(episodeNumber) {
        this.performChecks();
        return this.sendGetRequest(`tv/${this.showID}/season/${this.seasonNumber}/episode/${episodeNumber}/translations`);
    }
    async videos(episodeNumber) {
        this.performChecks();
        return this.sendGetRequest(`tv/${this.showID}/season/${this.seasonNumber}/episode/${episodeNumber}/videos`);
    }
    performChecks() {
        if (this.showID === null) {
            throw new Error('You must set the Show ID first via the `show(showID: number)` method!');
        }
        if (this.seasonNumber === null) {
            throw new Error('You must set the Season Number first via the `season(seasonNumber: number)` method!');
        }
    }
}
exports.TVEpisode = TVEpisode;
//# sourceMappingURL=tvEpisode.js.map