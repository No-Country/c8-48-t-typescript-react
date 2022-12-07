import {
  IsEnum,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Length,
} from 'class-validator';
import { StudyLevel } from '../types/studyLevel.type';

export class UpdateAcademicAthleteDto {
  @IsString()
  @IsEnum(StudyLevel)
  @IsOptional()
  studyLevel?: StudyLevel;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  average?: number;

  @IsString()
  @Length(1)
  @IsOptional()
  areaInterest?: string;

  @IsString()
  @Length(1)
  @IsOptional()
  careerInterest?: string;
}
