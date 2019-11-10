# TV Endpoint
## Initialize Client
```ts
import { TMDBClient } from 'moviedatabase-client';
const tmdb = new TMDBClient('API_KEY');
```


#### Get the primary TV show details by id.
[View original method documentation](https://developers.themoviedb.org/3/tv/get-tv-details)
```ts
const data = tmdb.tv.details(tvID: number);
// This method call will return instance of Promise<TVDetailsResponse>
```
#### Returns all of the alternative titles for a TV show.
[View original method documentation](https://developers.themoviedb.org/3/tv/get-tv-alternative-titles)
```ts
const data = tmdb.tv.alternativeTitles(tvID: number);
// This method call will return instance of Promise<TVAlternativeTitlesResponse>
```
#### Get the changes for a TV show. By default only the last 24 hours are returned.
[View original method documentation](https://developers.themoviedb.org/3/tv/get-tv-changes)
```ts
const data = tmdb.tv.changes(tvID: number, parameters: QueryDateLimiter = {});
// This method call will return instance of Promise<TVChangesResponse>
```
#### Get the list of content ratings (certifications) that have been added to a TV show.
[View original method documentation](https://developers.themoviedb.org/3/tv/get-tv-content-ratings)
```ts
const data = tmdb.tv.contentRatings(tvID: number);
// This method call will return instance of Promise<TVContentRatingsResponse>
```
#### Get the credits (cast and crew) that have been added to a TV show.
[View original method documentation](https://developers.themoviedb.org/3/tv/get-tv-credits)
```ts
const data = tmdb.tv.credits(tvID: number);
// This method call will return instance of Promise<TVCreditsResponse>
```
#### Get all of the episode groups that have been created for a TV show.
[View original method documentation](https://developers.themoviedb.org/3/tv/get-tv-episode-groups)
```ts
const data = tmdb.tv.episodeGroup(tvID: number);
// This method call will return instance of Promise<TVEpisodeGroupsResponse>
```
#### Get the external ids for a TV show.
[View original method documentation](https://developers.themoviedb.org/3/tv/get-tv-external-ids)
```ts
const data = tmdb.tv.externalIDs(tvID: number);
// This method call will return instance of Promise<TVExternalIDResponse>
```
#### Get the images that belong to a TV show.
[View original method documentation](https://developers.themoviedb.org/3/tv/get-tv-images)
```ts
const data = tmdb.tv.images(tvID: number, parameters: QueryParameters = {});
// This method call will return instance of Promise<TVImagesResponse>
```
#### Get the keywords that have been added to a TV show.
[View original method documentation](https://developers.themoviedb.org/3/tv/get-tv-keywords)
```ts
const data = tmdb.tv.keywords(tvID: number);
// This method call will return instance of Promise<TVKeywordsResponse>
```
#### Get the list of TV show recommendations for this item.
[View original method documentation](https://developers.themoviedb.org/3/tv/get-tv-recommendations)
```ts
const data = tmdb.tv.recommendations(tvID: number);
// This method call will return instance of Promise<TVRecommendationsResponse>
```
#### Get the reviews for a TV show.
[View original method documentation](https://developers.themoviedb.org/3/tv/get-tv-reviews)
```ts
const data = tmdb.tv.reviews(tvID: number);
// This method call will return instance of Promise<TVReviewsResponse>
```
#### Get a list of seasons or episodes that have been screened in a film festival or theatre.
[View original method documentation](https://developers.themoviedb.org/3/tv/get-screened-theatrically)
```ts
const data = tmdb.tv.screenedTheatrically(tvID: number);
// This method call will return instance of Promise<TVScreenedTheatricallyResponse>
```
#### Get a list of similar TV shows.
[View original method documentation](https://developers.themoviedb.org/3/tv/get-similar-tv-shows)
```ts
const data = tmdb.tv.similar(tvID: number);
// This method call will return instance of Promise<TVSimilarResponse>
```
#### Get a list of the translations that exist for a TV show.
[View original method documentation](https://developers.themoviedb.org/3/tv/get-similar-tv-shows)
```ts
const data = tmdb.tv.translations(tvID: number);
// This method call will return instance of Promise<TVTranslationsResponse>
```
#### Get the videos that have been added to a TV show.
[View original method documentation](https://developers.themoviedb.org/3/tv/get-tv-videos)
```ts
const data = tmdb.tv.videos(tvID: number);
// This method call will return instance of Promise<TVVideosResponse>
```
#### Get the most newly created TV show.
[View original method documentation](https://developers.themoviedb.org/3/tv/get-latest-tv)
```ts
const data = tmdb.tv.latest();
// This method call will return instance of Promise<TVDetailsResponse>
```
#### Get a list of TV shows that are airing today.
[View original method documentation](https://developers.themoviedb.org/3/tv/get-tv-airing-today)
```ts
const data = tmdb.tv.airingToday();
// This method call will return instance of Promise<TVAiringTodayResponse>
```
#### Get a list of shows that are currently on the air.
[View original method documentation](https://developers.themoviedb.org/3/tv/get-tv-airing-today)
```ts
const data = tmdb.tv.onTheAir();
// This method call will return instance of Promise<TVOnTheAirResponse>
```
#### Get a list of the current popular TV shows on TMDb. This list updates daily.
[View original method documentation](https://developers.themoviedb.org/3/tv/get-popular-tv-shows)
```ts
const data = tmdb.tv.popular();
// This method call will return instance of Promise<TVPopularResponse>
```
#### Get a list of the top rated TV shows on TMDb.
[View original method documentation](https://developers.themoviedb.org/3/tv/get-top-rated-tv)
```ts
const data = tmdb.tv.topRated();
// This method call will return instance of Promise<TVTopRatedResponse>
```
