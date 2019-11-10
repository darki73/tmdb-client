# Company Endpoint

## Initialize Client
```ts
import { TMDBClient } from 'moviedatabase-client';
const tmdb = new TMDBClient('API_KEY');
```

#### Get API Configuration
[View original method documentation](https://developers.themoviedb.org/3/configuration/get-api-configuration)
```ts
const data = tmdb.configuration.api();
// This method call will return instance of Promise<ConfigurationAPIResponse>
``` 

#### Get Countries
[View original method documentation](https://developers.themoviedb.org/3/configuration/get-countries)
```ts
const data = tmdb.configuration.countries();
// This method call will return instance of Promise<ConfigurationCountriesResponse>
``` 

#### Get Jobs
[View original method documentation](https://developers.themoviedb.org/3/configuration/get-jobs)
```ts
const data = tmdb.configuration.jobs();
// This method call will return instance of Promise<ConfigurationJobsResponse>
``` 

#### Get Languages
[View original method documentation](https://developers.themoviedb.org/3/configuration/get-languages)
```ts
const data = tmdb.configuration.languages();
// This method call will return instance of Promise<ConfigurationLanguagesResponse>
``` 

#### Get Primary Translations
[View original method documentation](https://developers.themoviedb.org/3/configuration/get-primary-translations)
```ts
const data = tmdb.configuration.primaryTranslations();
// This method call will return instance of Promise<ConfigurationPrimaryTranslationsResponse>
``` 

#### Get Timezones
[View original method documentation](https://developers.themoviedb.org/3/configuration/get-timezones)
```ts
const data = tmdb.configuration.timezones();
// This method call will return instance of Promise<ConfigurationTimezonesResponse>
``` 

