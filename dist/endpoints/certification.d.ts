import { BaseEndpoint } from './baseEndpoint';
import { CertificationsResponse } from '../interfaces/certifications';
export declare class Certification extends BaseEndpoint {
    movies(): Promise<CertificationsResponse>;
    tv(): Promise<CertificationsResponse>;
}
