import * as request from 'request-promise-native';
import { RequestError } from '../classes/RequestError';
import { EndpointConfiguration } from '../interfaces/common/EndpointConfiguration';

export interface QueryParameters {
    [key: string]: any;
}

export interface QueryDateLimiter {
    start_date?: string;
    end_date?: string;
}

/**
 * Abstract BaseEndpoint Class
 */
export abstract class BaseEndpoint {

    /**
     * Currently selected page
     * @var number
     */
    protected pageNumber: number = 1;

    /**
     * Language used to fetch data
     * @var string
     */
    protected selectedLanguage: string = 'en-US';

    /**
     * Default endpoint constructor
     * @param configuration
     */
    public constructor(private configuration: EndpointConfiguration) {}

    /**
     * Get results from the specified page
     * @param page
     * @return BaseEndpoint|self|this
     */
    public page(page: number): this {
        if (page > 0 && page <= 1000) {
            this.pageNumber = page;
        }
        return this;
    }

    /**
     * Set the language for the API response
     * @param language
     */
    public language(language: string): this {
        this.selectedLanguage = language;
        return this;
    }

    /**
     * Send GET request to the API
     * @param path
     * @param parameters
     */
    protected sendGetRequest(path: string, parameters: QueryParameters = {}): Promise<any> {
        const url = this.buildRequestPath(path, parameters);
        return request({
            url,
            json: true,
        })
            .then((json: any) => json)
            .catch(({ error }: any) => {
                const requestUrl = this.buildRequestPath(path, parameters, true);
                throw new RequestError(error.status_code, error.status_message, requestUrl);
            });
    }

    /**
     * Build proper request path and append passed parameters
     * @param { string } path
     * @param { QueryParameters } parameters
     * @param { boolean } omitAPIKey
     */
    private buildRequestPath(path: string, parameters: QueryParameters, omitAPIKey: boolean = false): string {
        const requestPath = `${this.configuration.host}/${path}`;
        const parametersArray: string[] = [];
        if (omitAPIKey === false) {
            parametersArray.push(`${encodeURIComponent('api_key')}=${encodeURIComponent(this.configuration.key)}`);
        }

        const imageLanguages: [string] = ['en'];
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
                } else {
                    parametersArray.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
                }
            }
        });

        const requestPathWithParameters = requestPath + '?' + parametersArray.join('&');
        return requestPathWithParameters.replace(/\?+$/, '');
    }

}
