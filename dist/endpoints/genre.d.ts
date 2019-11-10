import { BaseEndpoint } from './baseEndpoint';
import { GenresResponse } from '../interfaces/genres';
export declare class Genre extends BaseEndpoint {
    movie(): Promise<GenresResponse>;
    tv(): Promise<GenresResponse>;
}
