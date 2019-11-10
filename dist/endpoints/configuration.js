"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseEndpoint_1 = require("./baseEndpoint");
class Configuration extends baseEndpoint_1.BaseEndpoint {
    async api() {
        return this.sendGetRequest(`configuration`);
    }
    async countries() {
        return this.sendGetRequest('configuration/countries');
    }
    async jobs() {
        return this.sendGetRequest('configuration/jobs');
    }
    async languages() {
        return this.sendGetRequest('configuration/languages');
    }
    async primaryTranslations() {
        return this.sendGetRequest('configuration/primary_translations');
    }
    async timezones() {
        return this.sendGetRequest('configuration/timezones');
    }
}
exports.Configuration = Configuration;
//# sourceMappingURL=configuration.js.map