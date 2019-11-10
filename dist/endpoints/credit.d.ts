import { BaseEndpoint } from './baseEndpoint';
import { CreditsResponse } from '../interfaces/credits';
export declare class Credit extends BaseEndpoint {
    details(creditID: string): Promise<CreditsResponse>;
}
