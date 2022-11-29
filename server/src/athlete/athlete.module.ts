import { Module } from '@nestjs/common';
import { AthleteService } from './athlete.service';
import { AthleteController } from './athlete.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Athlete } from './entities/athlete.entity';
import { AuthModule } from '../auth/auth.module';
import { MultimediaModule } from '../multimedia/multimedia.module';

@Module({
  controllers: [AthleteController],
  providers: [AthleteService],
  imports: [TypeOrmModule.forFeature([Athlete]), AuthModule, MultimediaModule],
  exports: [TypeOrmModule],
})
export class AthleteModule {}
