import { PartialType } from '@nestjs/mapped-types';
import { CreateAthleteDto } from './create-athlete.dto';

export class UpdateAthleteDto extends PartialType(CreateAthleteDto) {}
