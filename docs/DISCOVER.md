# Discover Endpoint
## Initialize Client
```ts
import { TMDBClient } from 'moviedatabase-client';
const tmdb = new TMDBClient('API_KEY');
```


#### Discover movies by different types of data like average rating, number of votes, genres and certifications.
[View original method documentation](https://developers.themoviedb.org/3/discover/movie-discover)
```ts
const data = tmdb.discover.movie(parameters: QueryParameters = {});
// This method call will return instance of Promise<DiscoverMovieResponse>
```
#### Discover TV shows by different types of data like average rating, number of votes, genres, the network they aired on and air dates.
[View original method documentation](https://developers.themoviedb.org/3/discover/tv-discover)
```ts
const data = tmdb.discover.tv(parameters: QueryParameters = {});
// This method call will return instance of Promise<DiscoverTVResponse>
```


**Discover endpoint also supports filtering.**   

You can request for certain genres to be present, or absent from the response, also you can require movies/tv shows only from certain companies;
```ts
// Return only media elements with the following genres present on them
const data = tmdb.discover.withGenres(genres: [number]).movie(parameters: QueryParameters = {});
const data = tmdb.discover.withGenres(genres: [number]).tv(parameters: QueryParameters = {});

// Return only media elements which do not have the defined genres on them
const data = tmdb.discover.withoutGenres(genres: [number]).movie(parameters: QueryParameters = {});
const data = tmdb.discover.withoutGenres(genres: [number]).tv(parameters: QueryParameters = {});

// Return only media elements which were released by the given companies
const data = tmdb.discover.withCompanies(companies: [number]).movie(parameters: QueryParameters = {});
const data = tmdb.discover.withCompanies(companies: [number]).tv(parameters: QueryParameters = {});
```
