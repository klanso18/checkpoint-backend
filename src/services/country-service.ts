import { Repository } from "typeorm";
import datasource from "../lib/datasource";
import Country, { CountryInput } from "../entities/country";

export default class CountryService {
  db: Repository<Country>;
  constructor() {
    this.db = datasource.getRepository(Country);
  }

  async listCountries() {
    return this.db.find();
  }

  async createCountry({ name, code, emoji, continent }: CountryInput) {
    const newCountry = this.db.create({ name, code, emoji, continent });
    return await this.db.save(newCountry);
  }

  async findCountryByName(name: string) {
    return await this.db.findOneBy({ name });
  }

  async findCountryByCode(code: string) {
    return await this.db.findOne({ where: { code } });
  }

  async findCountriesByContinent(continent: string) {
    return await this.db.find({ where: { continent } });
  }
}
