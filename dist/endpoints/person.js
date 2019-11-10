"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseEndpoint_1 = require("./baseEndpoint");
class Person extends baseEndpoint_1.BaseEndpoint {
    async details(personID, parameters = {}) {
        return this.sendGetRequest(`person/${personID}`);
    }
    async changes(personID, parameters = {}) {
        return this.sendGetRequest(`person/${personID}/changes`, parameters);
    }
    async movieCredits(personID) {
        return this.sendGetRequest(`person/${personID}/movie_credits`);
    }
    async tvCredits(personID) {
        return this.sendGetRequest(`person/${personID}/tv_credits`);
    }
    async combinedCredits(personID) {
        return this.sendGetRequest(`person/${personID}/combined_credits`);
    }
    async externalIDs(personID) {
        return this.sendGetRequest(`person/${personID}/external_ids`);
    }
    async images(personID) {
        return this.sendGetRequest(`person/${personID}/images`);
    }
    async taggedImages(personID) {
        return this.sendGetRequest(`person/${personID}/tagged_images`);
    }
    async translations(personID) {
        return this.sendGetRequest(`person/${personID}/translations`);
    }
    async latest() {
        return this.sendGetRequest(`person/latest`);
    }
}
exports.Person = Person;
//# sourceMappingURL=person.js.map