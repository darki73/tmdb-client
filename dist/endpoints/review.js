"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseEndpoint_1 = require("./baseEndpoint");
class Review extends baseEndpoint_1.BaseEndpoint {
    async details(reviewID) {
        return this.sendGetRequest(`review/${reviewID}`);
    }
}
exports.Review = Review;
//# sourceMappingURL=review.js.map