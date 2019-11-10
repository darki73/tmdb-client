"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseEndpoint_1 = require("./baseEndpoint");
class Company extends baseEndpoint_1.BaseEndpoint {
    async details(companyID) {
        return this.sendGetRequest(`company/${companyID}`);
    }
    async alternativeNames(companyID) {
        return this.sendGetRequest(`company/${companyID}/alternative_names`);
    }
    async images(companyID) {
        return this.sendGetRequest(`company/${companyID}/images`);
    }
}
exports.Company = Company;
//# sourceMappingURL=company.js.map