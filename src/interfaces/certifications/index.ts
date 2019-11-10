/**
 * Definition for Country Object
 */
export interface CertificationCountry {
    [key: string]: [Certification];
}

/**
 * Definition for the Certification Object
 */
export interface Certification {
    certification: string;
    meaning: string;
    order: number;
}

/**
 * Interface which represents list of all certifications for all countries
 */
export interface CertificationsResponse {
    certifications: CertificationCountry;
}
