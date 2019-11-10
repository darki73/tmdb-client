import { BaseEndpoint } from './baseEndpoint';
import {
    NetworkAlternativeNamesResponse,
    NetworkDetailsResponse, NetworkImagesResponse,
} from '../interfaces/network';

/**
 * Network Endpoint Class
 */
export class Network extends BaseEndpoint {

    /**
     * Get the details of a network.
     * @param { number } networkID
     * @return { Promise<NetworkDetailsResponse> }
     * @see https://developers.themoviedb.org/3/networks/get-network-details
     */
    public async details(networkID: number): Promise<NetworkDetailsResponse> {
        return this.sendGetRequest(`network/${networkID}`);
    }

    /**
     * Get the alternative names of a network.
     * @param { number } networkID
     * @return { Promise<NetworkAlternativeNamesResponse> }
     * @see https://developers.themoviedb.org/3/networks/get-network-alternative-names
     */
    public async alternativeNames(networkID: number): Promise<NetworkAlternativeNamesResponse> {
        return this.sendGetRequest(`network/${networkID}/alternative_names`);
    }

    /**
     * Get the TV network logos by id.
     * @param { number } networkID
     * @return { Promise<NetworkImagesResponse> }
     * @see https://developers.themoviedb.org/3/networks/get-network-images
     */
    public async images(networkID: number): Promise<NetworkImagesResponse> {
        return this.sendGetRequest(`network/${networkID}/images`);
    }

}
