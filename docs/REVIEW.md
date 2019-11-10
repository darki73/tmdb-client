# Review Endpoint
## Initialize Client
```ts
import { TMDBClient } from 'moviedatabase-client';
const tmdb = new TMDBClient('API_KEY');
```


#### Get review by its ID.
[View original method documentation](https://developers.themoviedb.org/3/reviews/get-review-details)
```ts
const data = tmdb.review.details(reviewID: string);
// This method call will return instance of Promise<ReviewDetailsResponse>
```
