# TV Season Endpoint
## Initialize Client
```ts
import { TMDBClient } from 'moviedatabase-client';
const tmdb = new TMDBClient('API_KEY');
```


#### Get the TV season details by id.
[View original method documentation](https://developers.themoviedb.org/3/tv-seasons/get-tv-season-details)
```ts
const data = tmdb.tvSeason.details(seasonNumber: number, appendToResponse: string[] = []);
// This method call will return instance of Promise<TVSeasonDetailsResponse>
```
#### Get the credits for TV season.
[View original method documentation](https://developers.themoviedb.org/3/tv-seasons/get-tv-season-credits)
```ts
const data = tmdb.tvSeason.credits(seasonNumber: number);
// This method call will return instance of Promise<TVSeasonCreditsResponse>
```
#### Get the external ids for a TV season.
[View original method documentation](https://developers.themoviedb.org/3/tv-seasons/get-tv-season-external-ids)
```ts
const data = tmdb.tvSeason.externalIDs(seasonNumber: number);
// This method call will return instance of Promise<TVSeasonExternalIDResponse>
```
#### Get the images that belong to a TV season.
[View original method documentation](https://developers.themoviedb.org/3/tv-seasons/get-tv-season-images)
```ts
const data = tmdb.tvSeason.images(seasonNumber: number);
// This method call will return instance of Promise<TVSeasonImagesResponse>
```
#### Get the videos that have been added to a TV season.
[View original method documentation](https://developers.themoviedb.org/3/tv-seasons/get-tv-season-external-ids)
```ts
const data = tmdb.tvSeason.videos(seasonNumber: number);
// This method call will return instance of Promise<TVSeasonVideosResponse>
```

