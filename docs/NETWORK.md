# Network Endpoint
## Initialize Client
```ts
import { TMDBClient } from 'moviedatabase-client';
const tmdb = new TMDBClient('API_KEY');
```


#### Get the details of a network.
[View original method documentation](https://developers.themoviedb.org/3/networks/get-network-details)
```ts
const data = tmdb.network.details(networkID: number);
// This method call will return instance of Promise<NetworkDetailsResponse>
```
#### Get the alternative names of a network.
[View original method documentation](https://developers.themoviedb.org/3/networks/get-network-alternative-names)
```ts
const data = tmdb.network.alternativeNames(networkID: number);
// This method call will return instance of Promise<NetworkAlternativeNamesResponse>
```
#### Get the TV network logos by id.
[View original method documentation](https://developers.themoviedb.org/3/networks/get-network-images)
```ts
const data = tmdb.network.images(networkID: number);
// This method call will return instance of Promise<NetworkImagesResponse>
```
