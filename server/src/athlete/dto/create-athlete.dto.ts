import { OmitType } from '@nestjs/mapped-types';
import {
  IsBoolean,
  IsNumber,
  IsPositive,
  IsString,
  Length,
  Min,
} from 'class-validator';
import { CreateUserDto } from 'src/auth/dto/create-user.dto';
export class CreateAthleteDto extends OmitType(CreateUserDto, [
  'password',
] as const) {
  @IsNumber()
  @IsPositive({
    message: 'El $property debe de ser un numero positivo',
  })
  @Min(1)
  age: number;

  @IsNumber()
  @IsPositive()
  @Min(1)
  idCountry: number;

  @IsNumber(
    { maxDecimalPlaces: 2 },
    {
      message: `$property tiene que ingresar un numero decimal de dos dígitos.`,
    },
  )
  @IsPositive({
    message: 'La $property debe de ser un numero positivo',
  })
  height: number;

  @IsNumber(
    { maxDecimalPlaces: 2 },
    {
      message: `$property tiene que ingresar un numero decimal de dos dígitos.`,
    },
  )
  @IsPositive({
    message: 'La $property debe de ser un numero positivo',
  })
  weight: number;

  @IsBoolean()
  leadership: boolean;
  @IsBoolean()
  temperance: boolean;
  @IsString()
  @Length(1, 255, {
    message:
      'La $property debe de ingresar un mínimo de 1 y un máximo de 255 caracteres.',
  })
  visionGame: string;
  @IsString()
  @Length(1, 255, {
    message: 'La $property debe de ingresar un máximo de 255 caracteres.',
  })
  fortress: string;
}
