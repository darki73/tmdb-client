"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseEndpoint_1 = require("./baseEndpoint");
class Trending extends baseEndpoint_1.BaseEndpoint {
    async allDaily() {
        return this.allDry('day');
    }
    async allWeekly() {
        return this.allDry('week');
    }
    async moviesDaily() {
        return this.movieDry('day');
    }
    async moviesWeekly() {
        return this.movieDry('week');
    }
    async peopleDaily() {
        return this.personDry('day');
    }
    async peopleWeekly() {
        return this.personDry('week');
    }
    async tvDaily() {
        return this.tvDry('day');
    }
    async tvWeekly() {
        return this.tvDry('week');
    }
    async allDry(timeSlice) {
        return this.sendGetRequest(`trending/all/${timeSlice}`);
    }
    async movieDry(timeSlice) {
        return this.sendGetRequest(`trending/movie/${timeSlice}`);
    }
    async personDry(timeSlice) {
        return this.sendGetRequest(`trending/person/${timeSlice}`);
    }
    async tvDry(timeSlice) {
        return this.sendGetRequest(`trending/tv/${timeSlice}`);
    }
}
exports.Trending = Trending;
//# sourceMappingURL=trending.js.map