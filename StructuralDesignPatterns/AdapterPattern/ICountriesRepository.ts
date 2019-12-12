import { Country } from './country';
import { Continent } from './countryRepository';

export interface ICountriesRepository {
  all(): Promise<Country[]>;
  allByContinent(continent: Continent): Promise<Country[]>;
  allByCurrency(currency: string): Promise<Country[]>;
}
