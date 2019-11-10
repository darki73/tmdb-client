"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseEndpoint_1 = require("./baseEndpoint");
class Changes extends baseEndpoint_1.BaseEndpoint {
    async movies() {
        return this.sendGetRequest('movie/changes');
    }
    async tv() {
        return this.sendGetRequest('tv/changes');
    }
    async person() {
        return this.sendGetRequest('person/changes');
    }
}
exports.Changes = Changes;
//# sourceMappingURL=changes.js.map