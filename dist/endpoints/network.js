"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseEndpoint_1 = require("./baseEndpoint");
class Network extends baseEndpoint_1.BaseEndpoint {
    async details(networkID) {
        return this.sendGetRequest(`network/${networkID}`);
    }
    async alternativeNames(networkID) {
        return this.sendGetRequest(`network/${networkID}/alternative_names`);
    }
    async images(networkID) {
        return this.sendGetRequest(`network/${networkID}/images`);
    }
}
exports.Network = Network;
//# sourceMappingURL=network.js.map