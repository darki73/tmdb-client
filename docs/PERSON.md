
# Person Endpoint
## Initialize Client
```ts
import { TMDBClient } from 'moviedatabase-client';
const tmdb = new TMDBClient('API_KEY');
```


#### Get the primary person details by id.
[View original method documentation](https://developers.themoviedb.org/3/people/get-person-details)
```ts
const data = tmdb.person.details(personID: number, parameters: QueryParameters = {});
// This method call will return instance of Promise<PersonDetailsResponse>
```
#### Get the changes for a person. By default only the last 24 hours are returned.
[View original method documentation](https://developers.themoviedb.org/3/people/get-person-changes)
```ts
const data = tmdb.person.changes(personID: number, parameters: QueryDateLimiter = {});
// This method call will return instance of Promise<PersonChangesResponse>
```
#### Get the movie credits for a person.
[View original method documentation](https://developers.themoviedb.org/3/people/get-person-movie-credits)
```ts
const data = tmdb.person.movieCredits(personID: number);
// This method call will return instance of Promise<PersonMovieCreditsResponse>
```
#### Get the tv credits for a person.
[View original method documentation](https://developers.themoviedb.org/3/people/get-person-tv-credits)
```ts
const data = tmdb.person.tvCredits(personID: number);
// This method call will return instance of Promise<PersonTVCreditsResponse>
```
#### Get the movie and TV credits together in a single response.
[View original method documentation](https://developers.themoviedb.org/3/people/get-person-combined-credits)
```ts
const data = tmdb.person.combinedCredits(personID: number);
// This method call will return instance of Promise<PersonCombinedCreditsResponse>
```
#### Get the external ids for a person.
[View original method documentation](https://developers.themoviedb.org/3/people/get-person-external-ids)
```ts
const data = tmdb.person.externalIDs(personID: number);
// This method call will return instance of Promise<PersonExternalIDResponse>
```
#### Get the images for a person.
[View original method documentation](https://developers.themoviedb.org/3/people/get-person-images)
```ts
const data = tmdb.person.images(personID: number);
// This method call will return instance of Promise<PersonImagesResponse>
```
#### Get the images that this person has been tagged in.
[View original method documentation](https://developers.themoviedb.org/3/people/get-tagged-images)
```ts
const data = tmdb.person.taggedImages(personID: number);
// This method call will return instance of Promise<PersonTaggedImagesResponse>
```
#### Get a list of translations that have been created for a person.
[View original method documentation](https://developers.themoviedb.org/3/people/get-person-translations)
```ts
const data = tmdb.person.translations(personID: number);
// This method call will return instance of Promise<PersonTranslationsResponse>
```
#### Get the most newly created person.
[View original method documentation](https://developers.themoviedb.org/3/people/get-latest-person)
```ts
const data = tmdb.person.latest();
// This method call will return instance of Promise<PersonDetailsResponse>
```

