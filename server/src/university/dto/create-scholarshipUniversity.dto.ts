import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Length,
  Min,
} from 'class-validator';

export class CreateScholarshipUniversityDto {
  @IsNumber()
  @IsPositive({
    message: '$property debe de ser un numero positivo',
  })
  @Min(1)
  @IsOptional()
  age?: number;

  @IsString()
  @IsOptional()
  country?: string;

  @IsNumber(
    { maxDecimalPlaces: 2 },
    {
      message: `$property tiene que ingresar un numero decimal de dos dígitos.`,
    },
  )
  @IsPositive({
    message: '$property debe de ser un numero positivo',
  })
  @IsOptional()
  height?: number;

  @IsNumber(
    { maxDecimalPlaces: 2 },
    {
      message: `$property tiene que ingresar un numero decimal de dos dígitos.`,
    },
  )
  @IsPositive({
    message: '$property debe de ser un numero positivo',
  })
  @IsOptional()
  weight?: number;

  @IsBoolean()
  @IsOptional()
  leadership?: boolean;
  @IsBoolean()
  @IsOptional()
  temperance?: boolean;
  @IsString()
  @Length(1, 255, {
    message:
      '$property debe de ingresar un mínimo de 1 y un máximo de 255 caracteres.',
  })
  @IsOptional()
  gameVision?: string;
  @IsString()
  @Length(1, 255, {
    message: '$property debe de ingresar un máximo de 255 caracteres.',
  })
  @IsOptional()
  strength?: string;
  @IsString()
  @IsOptional()
  position?: string;

  @IsString()
  @IsOptional()
  leg?: string;

  @IsNumber()
  @IsOptional()
  acceleration?: number;
  @IsNumber()
  @IsOptional()
  speed?: number;
  @IsNumber()
  @IsOptional()
  jump?: number;

  @IsNumber()
  @IsOptional()
  shot?: number;
  @IsNumber()
  @IsOptional()
  passes?: number;
  @IsNumber()
  @IsOptional()
  quite?: number;
}
