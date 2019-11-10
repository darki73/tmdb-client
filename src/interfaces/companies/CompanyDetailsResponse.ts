export interface CompanyDetailsResponse {
    description: string;
    headquarters: string;
    homepage: string;
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
    parent_company: CompanyDetailsResponse | null;
}
