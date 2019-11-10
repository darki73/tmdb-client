import { BaseEndpoint } from './baseEndpoint';
import { CreditsResponse } from '../interfaces/credits';

/**
 * Credit Endpoint Class
 */
export class Credit extends BaseEndpoint {

    /**
     * Get a movie or TV credit details by id.
     * @return { Promise<CreditsResponse> }
     */
    public async details(creditID: string): Promise<CreditsResponse> {
        return this.sendGetRequest(`credit/${creditID}`);
    }

}
