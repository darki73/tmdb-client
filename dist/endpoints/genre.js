"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseEndpoint_1 = require("./baseEndpoint");
class Genre extends baseEndpoint_1.BaseEndpoint {
    async movie() {
        return this.sendGetRequest(`genre/movie/list`);
    }
    async tv() {
        return this.sendGetRequest('genre/tv/list');
    }
}
exports.Genre = Genre;
//# sourceMappingURL=genre.js.map