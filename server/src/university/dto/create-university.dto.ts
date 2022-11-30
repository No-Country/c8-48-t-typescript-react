import { OmitType } from '@nestjs/mapped-types';
import { Transform } from 'class-transformer';
import {
  IsBoolean,
  IsNumber,
  IsPositive,
  IsString,
  Length,
} from 'class-validator';
import { CreateUserDto } from 'src/auth/dto/create-user.dto';
export class CreateUniversityDto extends CreateUserDto {
  @IsNumber()
  @IsPositive()
  idCountry: number;

  @IsString()
  linkedin: string;

  @IsString()
  @Length(1, 255)
  website: string;

  @IsString()
  @Length(1, 255)
  description: string;

  @IsBoolean()
  acceptConditions: boolean;
}
