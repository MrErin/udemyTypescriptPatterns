import { CountriesRepository, Continent } from './countryRepository';
import { RestCountries } from './restCountries';
import { RestCountriesAdapter } from './restCountriesAdapter';

// let countriesRepo = new CountriesRepository();
let countriesRepo = new RestCountriesAdapter(new RestCountries());
countriesRepo.allByCurrency('EUR').then(euroCountries => {
  console.log('Euro countries: ', euroCountries);
});

countriesRepo.allByContinent(Continent.NorthAmerica).then(northAmerica => {
  console.log(
    `Number of North American countries stored: ${northAmerica.length}`,
  );
});

// let restCountries = new RestCountries();
// restCountries.getByRegion('Americas').then(c => {
//   console.log(`Number of North American Countries in REST: ${c.length}`);
// });
