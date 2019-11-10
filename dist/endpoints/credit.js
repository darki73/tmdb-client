"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseEndpoint_1 = require("./baseEndpoint");
class Credit extends baseEndpoint_1.BaseEndpoint {
    async details(creditID) {
        return this.sendGetRequest(`credit/${creditID}`);
    }
}
exports.Credit = Credit;
//# sourceMappingURL=credit.js.map