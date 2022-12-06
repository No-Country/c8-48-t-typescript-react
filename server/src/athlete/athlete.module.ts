import { Module } from '@nestjs/common';
import { AthleteService } from './athlete.service';
import { AthleteController } from './athlete.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Athlete } from './entities/athlete.entity';

@Module({
  controllers: [AthleteController],
  providers: [AthleteService],
  imports: [TypeOrmModule.forFeature([Athlete])],
  exports: [TypeOrmModule, AthleteService],
})
export class AthleteModule {}
