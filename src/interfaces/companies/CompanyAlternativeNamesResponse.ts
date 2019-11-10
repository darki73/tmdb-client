export interface CompanyAlternativeNames {
    name: string;
    type: string;
}

export interface CompanyAlternativeNamesResponse {
    id: number;
    results: [CompanyAlternativeNames];
}
