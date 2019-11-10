# Movie Endpoint

## Initialize Client
```ts
import { TMDBClient } from 'moviedatabase-client';
const tmdb = new TMDBClient('API_KEY');
```

#### Get Details
[View original method documentation](https://developers.themoviedb.org/3/movies/get-movie-details)
```ts
const data = tmdb.movie.details(movieID: number, parameters: QueryParameters = {}, appendToResponse: [string] | null = null);
// This method call will return instance of Promise<MovieDetailsResponse>
``` 

#### Get Alternative Titles
[View original method documentation](https://developers.themoviedb.org/3/movies/get-movie-alternative-titles)
```ts
const data = tmdb.movie.alternativeTitles(movieID: number, parameters: QueryParameters = {});
// This method call will return instance of Promise<MovieAlternativeTitlesResponse>
``` 

#### Get Changes
[View original method documentation](https://developers.themoviedb.org/3/movies/get-movie-changes)
```ts
const data = tmdb.movie.changes(movieID: number, parameters: QueryParameters = {});
// This method call will return instance of Promise<MovieChangesResponse>
``` 

#### Get Credits
[View original method documentation](https://developers.themoviedb.org/3/movies/get-movie-credits)
```ts
const data = tmdb.movie.credits(movieID: number);
// This method call will return instance of Promise<MovieCreditsResponse>
``` 

#### Get External IDs
[View original method documentation](https://developers.themoviedb.org/3/movies/get-movie-external-ids)
```ts
const data = tmdb.movie.externalIDs(movieID: number);
// This method call will return instance of Promise<MovieExternalIDResponse>
``` 

#### Get Images
[View original method documentation](https://developers.themoviedb.org/3/movies/get-movie-images)
```ts
const data = tmdb.movie.images(movieID: number, parameters: QueryParameters = {});
// This method call will return instance of Promise<MovieImagesResponse>
``` 

#### Get Keywords
[View original method documentation](https://developers.themoviedb.org/3/movies/get-movie-keywords)
```ts
const data = tmdb.movie.keywords(movieID: number);
// This method call will return instance of Promise<MovieKeywordsResponse>
``` 

#### Get Release Dates
[View original method documentation](https://developers.themoviedb.org/3/movies/get-movie-release-dates)
```ts
const data = tmdb.movie.releaseDates(movieID: number);
// This method call will return instance of Promise<MovieReleaseDatesResponse>
``` 

#### Get Videos
[View original method documentation](https://developers.themoviedb.org/3/movies/get-movie-videos)
```ts
const data = tmdb.movie.videos(movieID: number);
// This method call will return instance of Promise<MovieVideosResponse>
``` 

#### Get Translations
[View original method documentation](https://developers.themoviedb.org/3/movies/get-movie-translations)
```ts
const data = tmdb.movie.translations(movieID: number);
// This method call will return instance of Promise<MovieTranslationsResponse>
``` 

#### Get Recommendations
[View original method documentation](https://developers.themoviedb.org/3/movies/get-movie-recommendation)
```ts
const data = tmdb.movie.recommendations(movieID: number);
// This method call will return instance of Promise<MovieRecommendationsResponse>
``` 

#### Get Similar Movies
[View original method documentation](https://developers.themoviedb.org/3/movies/get-similar-movies)
```ts
const data = tmdb.movie.similar(movieID: number);
// This method call will return instance of Promise<MovieSimilarMoviesResponse>
``` 

#### Get Reviews
[View original method documentation](https://developers.themoviedb.org/3/movies/get-movie-translations)
```ts
const data = tmdb.movie.reviews(movieID: number);
// This method call will return instance of Promise<MovieReviewsResponse>
``` 

#### Get Lists
[View original method documentation](https://developers.themoviedb.org/3/movies/get-movie-recommendation)
```ts
const data = tmdb.movie.lists(movieID: number);
// This method call will return instance of Promise<MovieListsResponse>
``` 

#### Get Latest
[View original method documentation](https://developers.themoviedb.org/3/movies/get-latest-movie)
```ts
const data = tmdb.movie.latest();
// This method call will return instance of Promise<MovieDetailsResponse>
``` 

#### Get Now Playing
[View original method documentation](https://developers.themoviedb.org/3/movies/get-now-playing)
```ts
const data = tmdb.movie.nowPlaying(parameters: QueryWithRegion = {});
// This method call will return instance of Promise<MovieNowPlayingResponse>
``` 

#### Get Popular
[View original method documentation](https://developers.themoviedb.org/3/movies/get-popular-movies)
```ts
const data = tmdb.movie.popular(parameters: QueryWithRegion = {});
// This method call will return instance of Promise<MoviePopularResponse>
``` 

#### Get Top Rated
[View original method documentation](https://developers.themoviedb.org/3/movies/get-top-rated-movies)
```ts
const data = tmdb.movie.topRated(parameters: QueryWithRegion = {});
// This method call will return instance of Promise<MovieTopRatedResponse>
``` 

#### Get Upcoming
[View original method documentation](https://developers.themoviedb.org/3/movies/get-upcoming)
```ts
const data = tmdb.movie.upcoming(parameters: QueryWithRegion = {});
// This method call will return instance of Promise<MovieUpcomingResponse>
``` 
