# Credit Endpoint
## Initialize Client
```ts
import { TMDBClient } from 'moviedatabase-client';
const tmdb = new TMDBClient('API_KEY');
```


#### Get a movie or TV credit details by id.
[View original method documentation](https://developers.themoviedb.org/3/credits/get-credit-details)
```ts
const data = tmdb.credit.details(creditID: string);
// This method call will return instance of Promise<CreditsResponse>
```
