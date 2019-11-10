# Search Endpoint
## Initialize Client
```ts
import { TMDBClient } from 'moviedatabase-client';
const tmdb = new TMDBClient('API_KEY');
```


#### Search for companies.
[View original method documentation](https://developers.themoviedb.org/3/search/search-companies)
```ts
const data = tmdb.search.company(query: string);
// This method call will return instance of Promise<SearchCompaniesResponse>
```
#### Search for collections.
[View original method documentation](https://developers.themoviedb.org/3/search/search-collections)
```ts
const data = tmdb.search.collection(query: string);
// This method call will return instance of Promise<SearchCollectionsResponse>
```
#### Search for keywords.
[View original method documentation](https://developers.themoviedb.org/3/search/search-keywords)
```ts
const data = tmdb.search.keyword(query: string);
// This method call will return instance of Promise<SearchKeywordsResponse>
```
#### Search for movies.
[View original method documentation](https://developers.themoviedb.org/3/search/search-movies)
```ts
const data = tmdb.search.movie(query: string, parameters: MovieSearchQuery = {});
// This method call will return instance of Promise<SearchMovieResponse>
```
#### Search multiple models in a single request.
[View original method documentation](https://developers.themoviedb.org/3/search/multi-search)
```ts
const data = tmdb.search.multi(query: string, parameters: MultiSearchQuery = {});
// This method call will return instance of Promise<SearchMultiResponse>
```
#### Search for people.
[View original method documentation](https://developers.themoviedb.org/3/search/search-people)
```ts
const data = tmdb.search.people(query: string, parameters: PeopleSearchQuery = {});
// This method call will return instance of Promise<SearchPeopleResponse>
```
#### Search for a TV show.
[View original method documentation](https://developers.themoviedb.org/3/search/search-tv-shows)
```ts
const data = tmdb.search.tv(query: string, parameters: TVSearchQuery = {});
// This method call will return instance of Promise<SearchTVResponse>
```

