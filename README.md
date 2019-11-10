# The Movie Database Client
[![Code Quality][ico-code-quality]][link-code-quality] [![Build Status][ico-build-status]][link-build-status] [![Total Downloads][ico-downloads]][link-downloads]

## Initialize Client
```ts
import { TMDBClient } from 'moviedatabase-client';

const tmdb = new TMDBClient('API_KEY');
```

**Constructor also supports:**
-	Connecting to the TMDB API through http (https by default)
-	Changing the API version currently used
-	Changing the host of the TMDB Api server

```ts
public constructor(apiKey: string, secure: boolean = true, version: number = 3, host: string = 'api.themoviedb.org')
```

### Examples for specific endpoints you can find the in the [docs](https://github.com/darki73/tmdb-client/tree/master/docs) folder of this project.

[ico-code-quality]: https://scrutinizer-ci.com/g/darki73/tmdb-client/badges/quality-score.png?b=master
[ico-build-status]: https://scrutinizer-ci.com/g/darki73/tmdb-client/badges/build.png?b=master
[ico-downloads]: https://img.shields.io/npm/dt/moviedatabase-client.svg

[link-code-quality]: https://scrutinizer-ci.com/g/darki73/tmdb-client/?branch=master
[link-build-status]: https://scrutinizer-ci.com/g/darki73/tmdb-client/build-status/master
[link-downloads]: https://www.npmjs.com/package/moviedatabase-client
