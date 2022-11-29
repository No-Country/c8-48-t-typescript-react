import {
  IsBoolean,
  IsNumber,
  IsPositive,
  IsString,
  Length,
  Min,
} from 'class-validator';

export class UpdateAthleteDto {
  @IsNumber()
  @IsPositive({
    message: 'El $property debe de ser un numero positivo',
  })
  @Min(1)
  age: number;

  @IsNumber()
  @IsPositive()
  @Min(1)
  idPais: number;

  @IsNumber(
    { maxDecimalPlaces: 2 },
    {
      message: `$property tiene que ingresar un numero decimal de dos dígitos.`,
    },
  )
  @IsPositive({
    message: 'La $property debe de ser un numero positivo',
  })
  altura: number;

  @IsNumber(
    { maxDecimalPlaces: 2 },
    {
      message: `$property tiene que ingresar un numero decimal de dos dígitos.`,
    },
  )
  @IsPositive({
    message: 'La $property debe de ser un numero positivo',
  })
  peso: number;

  @IsBoolean()
  liderazgo: boolean;
  @IsBoolean()
  templaza: boolean;
  @IsString()
  @Length(1, 255, {
    message:
      'La $property debe de ingresar un mínimo de 1 y un máximo de 255 caracteres.',
  })
  visionJuego: string;
  @IsString()
  @Length(1, 255, {
    message: 'La $property debe de ingresar un máximo de 255 caracteres.',
  })
  fortaleza: string;
}
