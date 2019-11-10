# Trending Endpoint
## Initialize Client
```ts
import { TMDBClient } from 'moviedatabase-client';
const tmdb = new TMDBClient('API_KEY');
```


#### Get all trending items for a day
```ts
const data = tmdb.trending.allDaily();
// This method call will return instance of Promise<TrendingAllResponse>
```
#### Get all trending items for a week
```ts
const data = tmdb.trending.allWeekly();
// This method call will return instance of Promise<TrendingAllResponse>
```
#### Get all trending movies for a day
```ts
const data = tmdb.trending.moviesDaily();
// This method call will return instance of Promise<TrendingMovieResponse>
```
#### Get all trending movies for a week
```ts
const data = tmdb.trending.moviesWeekly();
// This method call will return instance of Promise<TrendingMovieResponse>
```
#### Get all trending people for a day
```ts
const data = tmdb.trending.peopleDaily();
// This method call will return instance of Promise<TrendingPersonResponse>
```
#### Get all trending people for a week
```ts
const data = tmdb.trending.peopleWeekly();
// This method call will return instance of Promise<TrendingPersonResponse>
```
#### Get all trending TV Series for a day
```ts
const data = tmdb.trending.tvDaily();
// This method call will return instance of Promise<TrendingTVResponse>
```
#### Get all trending TV Series for a week
```ts
const data = tmdb.trending.tvWeekly();
// This method call will return instance of Promise<TrendingTVResponse>
```

