import { BaseEndpoint } from './baseEndpoint';
import { ChangesResponse } from '../interfaces/changes';
export declare class Changes extends BaseEndpoint {
    movies(): Promise<ChangesResponse>;
    tv(): Promise<ChangesResponse>;
    person(): Promise<ChangesResponse>;
}
