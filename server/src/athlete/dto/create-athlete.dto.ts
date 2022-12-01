import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Length,
  Min,
} from 'class-validator';
import { CreateUserDto } from 'src/auth/dto/create-user.dto';
export class CreateAthleteDto extends CreateUserDto {
  @IsNumber()
  @IsPositive({
    message: '$property debe de ser un numero positivo',
  })
  @Min(1)
  @IsOptional()
  age?: number;

  @IsNumber()
  @IsPositive()
  @Min(1)
  @IsOptional()
  idCountry?: number;

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
}
