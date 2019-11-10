import { BaseEndpoint } from './baseEndpoint';
import {
    CompanyAlternativeNamesResponse,
    CompanyDetailsResponse,
    CompanyImagesResponse,
} from '../interfaces/companies';

/**
 * Companies Endpoint Class
 */
export class Company extends BaseEndpoint {

    /**
     * Get details for specified company
     * @param { number } companyID
     * @returns { Promise<CompanyDetailsResponse> }
     */
    public async details(companyID: number): Promise<CompanyDetailsResponse> {
        return this.sendGetRequest(`company/${companyID}`);
    }

    /**
     * Get alternative names for specified company
     * @param { number } companyID
     * @returns { Promise<CompanyAlternativeNamesResponse> }
     */
    public async alternativeNames(companyID: number): Promise<CompanyAlternativeNamesResponse> {
        return this.sendGetRequest(`company/${companyID}/alternative_names`);
    }

    /**
     * Get images for specified company
     * @param { number } companyID
     * @returns { Promise<CompanyImagesResponse> }
     */
    public async images(companyID: number): Promise<CompanyImagesResponse> {
        return this.sendGetRequest(`company/${companyID}/images`);
    }

}
