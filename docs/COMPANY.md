# Company Endpoint
## Initialize Client
```ts
import { TMDBClient } from 'moviedatabase-client';
const tmdb = new TMDBClient('API_KEY');
```


#### Get details for specified company
[View original method documentation](https://developers.themoviedb.org/3/companies/get-company-details)
```ts
const data = tmdb.company.details(companyID: number);
// This method call will return instance of Promise<CompanyDetailsResponse>
```
#### Get alternative names for specified company
[View original method documentation](https://developers.themoviedb.org/3/companies/get-company-alternative-names)
```ts
const data = tmdb.company.alternativeNames(companyID: number);
// This method call will return instance of Promise<CompanyAlternativeNamesResponse>
```
#### Get images for specified company
[View original method documentation](https://developers.themoviedb.org/3/companies/get-company-images)
```ts
const data = tmdb.company.images(companyID: number);
// This method call will return instance of Promise<CompanyImagesResponse>
```
