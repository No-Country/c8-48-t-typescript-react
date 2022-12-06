import { Module } from '@nestjs/common';
import { CountryService } from './country.service';
import { CountryController } from './country.controller';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { Country } from './entities/country.entity';

@Module({
  controllers: [CountryController],
  providers: [CountryService],
  imports: [TypeOrmModule.forFeature([Country])],
  exports: [CountryService, TypeOrmModule],
})
export class CountryModule {}
