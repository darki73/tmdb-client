# Network Endpoint

## Initialize Client
```ts
import { TMDBClient } from 'moviedatabase-client';
const tmdb = new TMDBClient('API_KEY');
```

#### Get Details
[View original method documentation](https://developers.themoviedb.org/3/people/get-person-details)
```ts
const data = tmdb.person.details(ersonID: number, parameters: QueryParameters = {});
// This method call will return instance of Promise<PersonDetailsResponse>
``` 

#### Get Changes
[View original method documentation](https://developers.themoviedb.org/3/people/get-person-changes)
```ts
const data = tmdb.person.changes(personID: number, parameters: QueryDateLimiter = {});
// This method call will return instance of Promise<PersonChangesResponse>
```

#### Get Movie Credits
[View original method documentation](https://developers.themoviedb.org/3/people/get-person-movie-credits)
```ts
const data = tmdb.person.movieCredits(personID: number);
// This method call will return instance of Promise<PersonMovieCreditsResponse>
```

#### Get TV Credits
[View original method documentation](https://developers.themoviedb.org/3/people/get-person-tv-credits)
```ts
const data = tmdb.person.tvCredits(personID: number);
// This method call will return instance of Promise<PersonTVCreditsResponse>
```

#### Get Combined Credits
[View original method documentation](https://developers.themoviedb.org/3/people/get-person-combined-credits)
```ts
const data = tmdb.person.combinedCredits(personID: number);
// This method call will return instance of Promise<PersonCombinedCreditsResponse>
```

#### Get External IDs
[View original method documentation](https://developers.themoviedb.org/3/people/get-person-external-ids)
```ts
const data = tmdb.person.externalIDs(personID: number);
// This method call will return instance of Promise<PersonExternalIDResponse>
```

#### Get Images
[View original method documentation](https://developers.themoviedb.org/3/people/get-person-images)
```ts
const data = tmdb.person.images(personID: number);
// This method call will return instance of Promise<PersonImagesResponse>
```

#### Get Tagged Images
[View original method documentation](https://developers.themoviedb.org/3/people/get-tagged-images)
```ts
const data = tmdb.person.taggedImages(personID: number)
// This method call will return instance of Promise<PersonTaggedImagesResponse>
```

#### Get Translations
[View original method documentation](https://developers.themoviedb.org/3/people/get-person-translations)
```ts
const data = tmdb.person.translations(personID: number);
// This method call will return instance of Promise<PersonTranslationsResponse>
```

#### Get Latest
[View original method documentation](https://developers.themoviedb.org/3/people/get-latest-person)
```ts
const data = tmdb.person.latest();
// This method call will return instance of Promise<PersonDetailsResponse>
```
