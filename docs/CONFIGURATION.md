# Configuration Endpoint
## Initialize Client
```ts
import { TMDBClient } from 'moviedatabase-client';
const tmdb = new TMDBClient('API_KEY');
```


#### Get the system wide configuration information.
[View original method documentation](https://developers.themoviedb.org/3/configuration/get-api-configuration)
```ts
const data = tmdb.configuration.api();
// This method call will return instance of Promise<ConfigurationAPIResponse>
```
#### Get the list of countries (ISO 3166-1 tags) used throughout TMDb.
[View original method documentation](https://developers.themoviedb.org/3/configuration/get-countries)
```ts
const data = tmdb.configuration.countries();
// This method call will return instance of Promise<ConfigurationCountriesResponse>
```
#### Get a list of the jobs and departments we use on TMDb.
[View original method documentation](https://developers.themoviedb.org/3/configuration/get-jobs)
```ts
const data = tmdb.configuration.jobs();
// This method call will return instance of Promise<ConfigurationJobsResponse>
```
#### Get the list of languages (ISO 639-1 tags) used throughout TMDb.
[View original method documentation](https://developers.themoviedb.org/3/configuration/get-languages)
```ts
const data = tmdb.configuration.languages();
// This method call will return instance of Promise<ConfigurationLanguagesResponse>
```
#### Get a list of the officially supported translations on TMDb.
[View original method documentation](https://developers.themoviedb.org/3/configuration/get-primary-translations)
```ts
const data = tmdb.configuration.primaryTranslations();
// This method call will return instance of Promise<ConfigurationPrimaryTranslationsResponse>
```
#### Get the list of timezones used throughout TMDb.
[View original method documentation](https://developers.themoviedb.org/3/configuration/get-timezones)
```ts
const data = tmdb.configuration.timezones();
// This method call will return instance of Promise<ConfigurationTimezonesResponse>
```
