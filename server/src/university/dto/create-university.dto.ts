import { IsBoolean, IsString, Length } from 'class-validator';
import { CreateUserDto } from 'src/auth/dto/create-user.dto';
export class CreateUniversityDto extends CreateUserDto {
  @IsString()
  country: string;

  @IsString()
  linkedin?: string;

  @IsString()
  @Length(1, 255)
  website?: string;

  @IsString()
  @Length(1, 255)
  description?: string;

  @IsBoolean()
  acceptConditions: boolean;
}
