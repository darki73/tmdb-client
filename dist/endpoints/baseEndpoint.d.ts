import { EndpointConfiguration } from '../interfaces/common/EndpointConfiguration';
export interface QueryParameters {
    [key: string]: any;
}
export interface QueryDateLimiter {
    start_date?: string;
    end_date?: string;
}
export declare abstract class BaseEndpoint {
    private configuration;
    protected pageNumber: number;
    protected selectedLanguage: string;
    constructor(configuration: EndpointConfiguration);
    page(page: number): this;
    language(language: string): this;
    protected sendGetRequest(path: string, parameters?: QueryParameters): Promise<any>;
    private buildRequestPath;
}
