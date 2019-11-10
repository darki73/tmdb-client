"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request-promise-native");
const RequestError_1 = require("../classes/RequestError");
class BaseEndpoint {
    constructor(configuration) {
        this.configuration = configuration;
        this.pageNumber = 1;
        this.selectedLanguage = 'en-US';
    }
    page(page) {
        if (page > 0 && page <= 1000) {
            this.pageNumber = page;
        }
        return this;
    }
    language(language) {
        this.selectedLanguage = language;
        return this;
    }
    sendGetRequest(path, parameters = {}) {
        const url = this.buildRequestPath(path, parameters);
        return request({
            url,
            json: true,
        })
            .then((json) => json)
            .catch(({ error }) => {
            const requestUrl = this.buildRequestPath(path, parameters, true);
            throw new RequestError_1.RequestError(error.status_code, error.status_message, requestUrl);
        });
    }
    buildRequestPath(path, parameters, omitAPIKey = false) {
        const requestPath = `${this.configuration.host}/${path}`;
        const parametersArray = [];
        if (omitAPIKey === false) {
            parametersArray.push(`${encodeURIComponent('api_key')}=${encodeURIComponent(this.configuration.key)}`);
        }
        const imageLanguages = ['en'];
        const { selectedLanguage } = this;
        parameters.page = this.pageNumber;
        parameters.adult = this.configuration.adult;
        parameters.language = selectedLanguage;
        if (selectedLanguage.indexOf('-') !== -1) {
            const lang = selectedLanguage.substr(0, selectedLanguage.indexOf('-')).toLowerCase();
            if (!imageLanguages.includes(lang)) {
                imageLanguages.push(lang);
            }
        }
        parameters.include_image_language = imageLanguages;
        Object.keys(parameters).forEach((key) => {
            if (parameters.hasOwnProperty(key)) {
                let value = parameters[key];
                if (Array.isArray(value)) {
                    value = value.join(',');
                    parametersArray.push(`${encodeURIComponent(key)}=${value}`);
                }
                else {
                    parametersArray.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
                }
            }
        });
        const requestPathWithParameters = requestPath + '?' + parametersArray.join('&');
        return requestPathWithParameters.replace(/\?+$/, '');
    }
}
exports.BaseEndpoint = BaseEndpoint;
//# sourceMappingURL=baseEndpoint.js.map