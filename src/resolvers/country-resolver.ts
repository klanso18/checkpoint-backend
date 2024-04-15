import { Arg, Mutation, Query, Resolver } from "type-graphql";
import CountryService from "../services/country-service";
import Country, { CountryInput } from "../entities/country";

@Resolver()
export default class CountryResolver {
  @Mutation(() => Country)
  async createCountry(@Arg("infos") infos: CountryInput) {
    const country = await new CountryService().findCountryByName(infos.name);
    if (country) {
      throw new Error("Ce pays existe déjà.");
    }
    const newCountry = new CountryService().createCountry(infos);
    return newCountry;
  }

  @Query(() => [Country])
  async countries() {
    return await new CountryService().listCountries();
  }

  @Query(() => Country, { nullable: true })
  async countryByCode(@Arg("code") code: string) {
    return await new CountryService().findCountryByCode(code);
  }

  @Query(() => [Country])
  async countriesByContinent(@Arg("continent") continent: string) {
    return await new CountryService().findCountriesByContinent(continent);
  }
}
