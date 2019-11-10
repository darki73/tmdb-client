# Certification Endpoint
## Initialize Client
```ts
import { TMDBClient } from 'moviedatabase-client';
const tmdb = new TMDBClient('API_KEY');
```


#### Get list of certifications for movies
[View original method documentation](https://developers.themoviedb.org/3/certifications/get-movie-certifications)
```ts
const data = tmdb.certification.movies();
// This method call will return instance of Promise<CertificationsResponse>
```
#### Get list of certifications for tv shows
[View original method documentation](https://developers.themoviedb.org/3/certifications/get-tv-certifications)
```ts
const data = tmdb.certification.tv();
// This method call will return instance of Promise<CertificationsResponse>
```
