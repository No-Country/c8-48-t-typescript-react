import { Module } from '@nestjs/common';
import { AthleteService } from './athlete.service';
import { AthleteController } from './athlete.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Athlete } from './entities/athlete.entity';
import { AcademicAthlete } from './entities/academicAthlete.entity';
import { User } from 'src/auth/entities/user.entity';

@Module({
  controllers: [AthleteController],
  providers: [AthleteService],
  imports: [TypeOrmModule.forFeature([Athlete, AcademicAthlete, User])],
  exports: [TypeOrmModule, AthleteService],
})
export class AthleteModule {}
