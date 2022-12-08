import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCountryDto } from './dto/create-country.dto';
import { Country } from './entities/country.entity';
import { Repository } from 'typeorm';
import { handleDBErrors } from '../shared/helper/ErrorExceptionDB';

@Injectable()
export class CountryService {
  @InjectRepository(Country)
  private readonly countryRepository: Repository<Country>;

  async create(createCountryDto: CreateCountryDto) {
    const country = this.countryRepository.create(createCountryDto);
    await this.countryRepository.save(country);
  }

  async findAll() {
    return this.countryRepository.find({
      select: {
        code: true,
        name: true,
      },
    });
  }

  async deleteAllCountries() {
    try {
      await this.countryRepository.delete({});
    } catch (error) {
      console.error(error);
      handleDBErrors(error);
    }
  }
}
