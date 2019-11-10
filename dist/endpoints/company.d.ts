import { BaseEndpoint } from './baseEndpoint';
import { CompanyAlternativeNamesResponse, CompanyDetailsResponse, CompanyImagesResponse } from '../interfaces/companies';
export declare class Company extends BaseEndpoint {
    details(companyID: number): Promise<CompanyDetailsResponse>;
    alternativeNames(companyID: number): Promise<CompanyAlternativeNamesResponse>;
    images(companyID: number): Promise<CompanyImagesResponse>;
}
