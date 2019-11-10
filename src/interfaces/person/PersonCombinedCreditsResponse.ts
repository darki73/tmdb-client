import {
    PersonMovieCreditCrew, PersonMovieCreditCast,
    PersonTVCreditCrew, PersonTVCreditCast,
} from './index';

export interface PersonCombinedCreditCast extends PersonMovieCreditCast, PersonTVCreditCast {}

export interface PersonCombinedCreditCrew extends PersonMovieCreditCrew, PersonTVCreditCrew {}

export interface PersonCombinedCreditsResponse {
    id: number;
    cast: [PersonCombinedCreditCast];
    crew: [PersonCombinedCreditCrew];
}
