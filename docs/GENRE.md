# Genre Endpoint
## Initialize Client
```ts
import { TMDBClient } from 'moviedatabase-client';
const tmdb = new TMDBClient('API_KEY');
```


#### Get the list of official genres for movies.
[View original method documentation](https://developers.themoviedb.org/3/genres/get-movie-list)
```ts
const data = tmdb.genre.movie();
// This method call will return instance of Promise<GenresResponse>
```
#### Get the list of official genres for TV shows.
[View original method documentation](https://developers.themoviedb.org/3/genres/get-tv-list)
```ts
const data = tmdb.genre.tv();
// This method call will return instance of Promise<GenresResponse>
```
