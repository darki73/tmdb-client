# Certifications Endpoint

## Initialize Client
```ts
import { TMDBClient } from 'moviedatabase-client';
const tmdb = new TMDBClient('API_KEY');
```

#### Get Movie Certifications
[View original method documentation](https://developers.themoviedb.org/3/certifications/get-movie-certifications)
```ts
const data = tmdb.certifications.movie();
// This method call will return instance of Promise<CertificationsResponse>
``` 

#### Get TV Certifications
[View original method documentation](https://developers.themoviedb.org/3/certifications/get-tv-certifications)
```ts
const data = tmdb.certifications.tv();
// This method call will return instance of Promise<CertificationsResponse>
``` 

