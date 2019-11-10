# Movie Endpoint
## Initialize Client
```ts
import { TMDBClient } from 'moviedatabase-client';
const tmdb = new TMDBClient('API_KEY');
```


#### Get the primary information about a movie.
[View original method documentation](https://developers.themoviedb.org/3/movies/get-movie-details)
```ts
const data = tmdb.movie.details(movieID: number, parameters: QueryParameters = {}, appendToResponse: [string] | null = null);
// This method call will return instance of Promise<MovieDetailsResponse>
```
#### Get all of the alternative titles for a movie.
[View original method documentation](https://developers.themoviedb.org/3/movies/get-movie-alternative-titles)
```ts
const data = tmdb.movie.alternativeTitles(movieID: number, parameters: QueryParameters = {});
// This method call will return instance of Promise<MovieAlternativeTitlesResponse>
```
#### Get the changes for a movie. By default only the last 24 hours are returned.
[View original method documentation](https://developers.themoviedb.org/3/movies/get-movie-changes)
```ts
const data = tmdb.movie.changes(movieID: number, parameters: QueryParameters = {});
// This method call will return instance of Promise<MovieChangesResponse>
```
#### Get the cast and crew for a movie.
[View original method documentation](https://developers.themoviedb.org/3/movies/get-movie-credits)
```ts
const data = tmdb.movie.credits(movieID: number);
// This method call will return instance of Promise<MovieCreditsResponse>
```
#### Get the external ids for a movie.
[View original method documentation](https://developers.themoviedb.org/3/movies/get-movie-external-ids)
```ts
const data = tmdb.movie.externalIDs(movieID: number);
// This method call will return instance of Promise<MovieExternalIDResponse>
```
#### Get the images that belong to a movie.
[View original method documentation](https://developers.themoviedb.org/3/movies/get-movie-images)
```ts
const data = tmdb.movie.images(movieID: number, parameters: QueryParameters = {});
// This method call will return instance of Promise<MovieImagesResponse>
```
#### Get the keywords that have been added to a movie.
[View original method documentation](https://developers.themoviedb.org/3/movies/get-movie-keywords)
```ts
const data = tmdb.movie.keywords(movieID: number);
// This method call will return instance of Promise<MovieKeywordsResponse>
```
#### Get the release date along with the certification for a movie.
[View original method documentation](https://developers.themoviedb.org/3/movies/get-movie-release-dates)
```ts
const data = tmdb.movie.releaseDates(movieID: number);
// This method call will return instance of Promise<MovieReleaseDatesResponse>
```
#### Get the videos that have been added to a movie.
[View original method documentation](https://developers.themoviedb.org/3/movies/get-movie-videos)
```ts
const data = tmdb.movie.videos(movieID: number);
// This method call will return instance of Promise<MovieVideosResponse>
```
#### Get a list of translations that have been created for a movie.
[View original method documentation](https://developers.themoviedb.org/3/movies/get-movie-translations)
```ts
const data = tmdb.movie.translations(movieID: number);
// This method call will return instance of Promise<MovieTranslationsResponse>
```
#### Get a list of recommended movies for a movie.
[View original method documentation](https://developers.themoviedb.org/3/movies/get-movie-recommendations)
```ts
const data = tmdb.movie.recommendations(movieID: number);
// This method call will return instance of Promise<MovieRecommendationsResponse>
```
#### Get a list of similar movies.
[View original method documentation](https://developers.themoviedb.org/3/movies/get-similar-movies)
```ts
const data = tmdb.movie.similar(movieID: number);
// This method call will return instance of Promise<MovieSimilarMoviesResponse>
```
#### Get the user reviews for a movie.
[View original method documentation](https://developers.themoviedb.org/3/movies/get-movie-reviews)
```ts
const data = tmdb.movie.reviews(movieID: number);
// This method call will return instance of Promise<MovieReviewsResponse>
```
#### Get a list of lists that this movie belongs to.
[View original method documentation](https://developers.themoviedb.org/3/movies/get-movie-lists)
```ts
const data = tmdb.movie.lists(movieID: number);
// This method call will return instance of Promise<MovieListsResponse>
```
#### Get the most newly created movie.
[View original method documentation](https://developers.themoviedb.org/3/movies/get-latest-movie)
```ts
const data = tmdb.movie.latest();
// This method call will return instance of Promise<MovieDetailsResponse>
```
#### Get a list of movies in theatres.
[View original method documentation](https://developers.themoviedb.org/3/movies/get-now-playing)
```ts
const data = tmdb.movie.nowPlaying(parameters: QueryWithRegion = {});
// This method call will return instance of Promise<MovieNowPlayingResponse>
```
#### Get a list of the current popular movies on TMDb. This list updates daily.
[View original method documentation](https://developers.themoviedb.org/3/movies/get-popular-movies)
```ts
const data = tmdb.movie.popular(parameters: QueryWithRegion = {});
// This method call will return instance of Promise<MoviePopularResponse>
```
#### Get the top rated movies on TMDb.
[View original method documentation](https://developers.themoviedb.org/3/movies/get-top-rated-movies)
```ts
const data = tmdb.movie.topRated(parameters: QueryWithRegion = {});
// This method call will return instance of Promise<MovieTopRatedResponse>
```
#### Get a list of upcoming movies in theatres.
[View original method documentation](https://developers.themoviedb.org/3/movies/get-upcoming)
```ts
const data = tmdb.movie.upcoming(parameters: QueryWithRegion = {});
// This method call will return instance of Promise<MovieUpcomingResponse>
```
