# Changes Endpoint
## Initialize Client
```ts
import { TMDBClient } from 'moviedatabase-client';
const tmdb = new TMDBClient('API_KEY');
```


#### Get list of changes for movies
[View original method documentation](https://developers.themoviedb.org/3/changes/get-movie-change-list)
```ts
const data = tmdb.changes.movies();
// This method call will return instance of Promise<ChangesResponse>
```
#### Get list of changes for tv shows
[View original method documentation](https://developers.themoviedb.org/3/changes/get-tv-change-list)
```ts
const data = tmdb.changes.tv();
// This method call will return instance of Promise<ChangesResponse>
```
#### Get list of changes for people
[View original method documentation](https://developers.themoviedb.org/3/changes/get-person-change-list)
```ts
const data = tmdb.changes.person();
// This method call will return instance of Promise<ChangesResponse>
```
