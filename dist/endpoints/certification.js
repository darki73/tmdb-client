"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseEndpoint_1 = require("./baseEndpoint");
class Certification extends baseEndpoint_1.BaseEndpoint {
    async movies() {
        return this.sendGetRequest('certification/movie/list');
    }
    async tv() {
        return this.sendGetRequest('certification/tv/list');
    }
}
exports.Certification = Certification;
//# sourceMappingURL=certification.js.map