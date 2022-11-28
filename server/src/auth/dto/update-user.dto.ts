import { IsString, MinLength } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @MinLength(1)
  fullName?: string;

  @IsString()
  @MinLength(1)
  urlPerfil?: string;
}
