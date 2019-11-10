import { MovieDetailsResponse } from '../movie';
import { PersonDetailsResponse } from '../person';
import { TVDetailsResponse } from '../tv';

interface TrendingBase {
    page: number;
    total_pages: number;
    total_results: number;
}

interface TrendingTVResponse extends TrendingBase {
    results: [TVDetailsResponse];
}

interface TrendingMovieResponse extends TrendingBase {
    results: [MovieDetailsResponse];
}

interface TrendingPersonResponse extends TrendingBase {
    results: [PersonDetailsResponse];
}

interface TrendingAllResponse extends TrendingBase {
    results: [TVDetailsResponse | MovieDetailsResponse | PersonDetailsResponse];
}

export {
    TrendingTVResponse,
    TrendingMovieResponse,
    TrendingPersonResponse,
    TrendingAllResponse,
};
