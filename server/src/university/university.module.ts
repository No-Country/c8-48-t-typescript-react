import { Module } from '@nestjs/common';
import { UniversityService } from './university.service';
import { UniversityController } from './university.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { University } from './entities/university.entity';

@Module({
  controllers: [UniversityController],
  providers: [UniversityService],
  imports: [TypeOrmModule.forFeature([University])],
  exports: [TypeOrmModule],
})
export class UniversityModule {}
