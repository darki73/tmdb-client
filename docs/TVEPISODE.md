# TV Episode Endpoint
## Initialize Client
```ts
import { TMDBClient } from 'moviedatabase-client';
const tmdb = new TMDBClient('API_KEY');
```


#### Get the TV episode details by id.
[View original method documentation](https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-details)
```ts
const data = tmdb.tvEpisode.details(episodeNumber: number, appendToResponse: string[] = []);
// This method call will return instance of Promise<TVEpisodeDetailsResponse>
```
#### Get the credits (cast, crew and guest stars) for a TV episode.
[View original method documentation](https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-credits)
```ts
const data = tmdb.tvEpisode.credits(episodeNumber: number);
// This method call will return instance of Promise<TVEpisodeCreditsResponse>
```
#### Get the external ids for a TV episode.
[View original method documentation](https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-external-ids)
```ts
const data = tmdb.tvEpisode.externalIDs(episodeNumber: number);
// This method call will return instance of Promise<TVEpisodeExternalIDResponse>
```
#### Get the images that belong to a TV episode.
[View original method documentation](https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-images)
```ts
const data = tmdb.tvEpisode.images(episodeNumber: number);
// This method call will return instance of Promise<TVEpisodeImagesResponse>
```
#### Get the translation data for an episode.
[View original method documentation](https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-translations)
```ts
const data = tmdb.tvEpisode.translations(episodeNumber: number);
// This method call will return instance of Promise<TVEpisodeTranslationsResponse>
```
#### Get the videos that have been added to a TV episode.
[View original method documentation](https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-videos)
```ts
const data = tmdb.tvEpisode.videos(episodeNumber: number);
// This method call will return instance of Promise<TVEpisodeVideosResponse>
```
