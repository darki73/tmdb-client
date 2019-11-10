"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseEndpoint_1 = require("./baseEndpoint");
class TVSeason extends baseEndpoint_1.BaseEndpoint {
    constructor() {
        super(...arguments);
        this.showID = null;
    }
    show(showID) {
        this.showID = showID;
        return this;
    }
    async details(seasonNumber, appendToResponse = []) {
        this.performChecks();
        return this.sendGetRequest(`tv/${this.showID}/season/${seasonNumber}`, {
            append_to_response: appendToResponse,
        });
    }
    async credits(seasonNumber) {
        this.performChecks();
        return this.sendGetRequest(`tv/${this.showID}/season/${seasonNumber}/credits`);
    }
    async externalIDs(seasonNumber) {
        this.performChecks();
        return this.sendGetRequest(`tv/${this.showID}/season/${seasonNumber}/external_ids`);
    }
    async images(seasonNumber) {
        this.performChecks();
        return this.sendGetRequest(`tv/${this.showID}/season/${seasonNumber}/images`);
    }
    async videos(seasonNumber) {
        this.performChecks();
        return this.sendGetRequest(`tv/${this.showID}/season/${seasonNumber}/videos`);
    }
    performChecks() {
        if (this.showID === null) {
            throw new Error('You must set the Show ID first via the `show(showID: number)` method!');
        }
    }
}
exports.TVSeason = TVSeason;
//# sourceMappingURL=tvSeason.js.map