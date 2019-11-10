export interface CertificationCountry {
    [key: string]: [Certification];
}
export interface Certification {
    certification: string;
    meaning: string;
    order: number;
}
export interface CertificationsResponse {
    certifications: CertificationCountry;
}
