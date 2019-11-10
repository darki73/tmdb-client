import { BaseEndpoint } from './baseEndpoint';
import { ChangesResponse } from '../interfaces/changes';

/**
 * Changes Endpoint Class
 */
export class Changes extends BaseEndpoint {

    /**
     * Get list of changes for movies
     * @returns { Promise<ChangesResponse> }
     */
    public async movies(): Promise<ChangesResponse> {
        return this.sendGetRequest('movie/changes');
    }

    /**
     * Get list of changes for tv shows
     * @returns { Promise<ChangesResponse> }
     */
    public async tv(): Promise<ChangesResponse> {
        return this.sendGetRequest('tv/changes');
    }

    /**
     * Get list of changes for people
     * @returns { Promise<ChangesResponse> }
     */
    public async person(): Promise<ChangesResponse> {
        return this.sendGetRequest('person/changes');
    }

}
