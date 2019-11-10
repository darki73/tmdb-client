import { BaseEndpoint } from './baseEndpoint';
import { CertificationsResponse } from '../interfaces/certifications';

/**
 * Certifications Endpoint Class
 */
export class Certification extends BaseEndpoint {

    /**
     * Get list of certifications for movies
     * @returns { Promise<CertificationsResponse> }
     * @see https://developers.themoviedb.org/3/certifications/get-movie-certifications
     */
    public async movies(): Promise<CertificationsResponse> {
        return this.sendGetRequest('certification/movie/list');
    }

    /**
     * Get list of certifications for tv shows
     * @returns { Promise<CertificationsResponse> }
     * @see https://developers.themoviedb.org/3/certifications/get-tv-certifications
     */
    public async tv(): Promise<CertificationsResponse> {
        return this.sendGetRequest('certification/tv/list');
    }

}
