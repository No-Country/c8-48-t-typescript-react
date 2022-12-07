import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { CountryService } from '../country/country.service';

@Injectable()
export class SeedService {
  constructor(
    private readonly countryService: CountryService,
    private readonly httpService: HttpService,
  ) {}
  async runSeed() {
    await this.insertCountries();
    return 'Seed execute success';
  }

  private async insertCountries() {
    try {
      await this.countryService.deleteAllCountries();
      const insertPromise: any[] = [];
      const { data } = await this.httpService.axiosRef.get(
        'https://restcountries.com/v3.1/all',
      );
      data.forEach((country: any) => {
        insertPromise.push(
          this.countryService.create({
            code: country.cca2,
            name: country.name.common,
            flag: country.flags.svg,
          }),
        );
      });

      await Promise.all(insertPromise);
    } catch (error) {
      console.log(error);
    }

    return true;
  }
}
