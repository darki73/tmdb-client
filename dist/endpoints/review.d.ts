import { BaseEndpoint } from './baseEndpoint';
import { ReviewDetailsResponse } from '../interfaces/review';
export declare class Review extends BaseEndpoint {
    details(reviewID: string): Promise<ReviewDetailsResponse>;
}
