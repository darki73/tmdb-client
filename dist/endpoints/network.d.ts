import { BaseEndpoint } from './baseEndpoint';
import { NetworkAlternativeNamesResponse, NetworkDetailsResponse, NetworkImagesResponse } from '../interfaces/network';
export declare class Network extends BaseEndpoint {
    details(networkID: number): Promise<NetworkDetailsResponse>;
    alternativeNames(networkID: number): Promise<NetworkAlternativeNamesResponse>;
    images(networkID: number): Promise<NetworkImagesResponse>;
}
