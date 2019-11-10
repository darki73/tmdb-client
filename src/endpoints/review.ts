import { BaseEndpoint } from './baseEndpoint';
import { ReviewDetailsResponse } from '../interfaces/review';

/**
 * Review Endpoint Class
 */
export class Review extends BaseEndpoint {

    /**
     * Get review by its ID.
     * @param { string } reviewID
     * @return { Promise<ReviewDetailsResponse> }
     * @see https://developers.themoviedb.org/3/reviews/get-review-details
     */
    public async details(reviewID: string): Promise<ReviewDetailsResponse> {
        return this.sendGetRequest(`review/${reviewID}`);
    }

}
