import { OmitType } from '@nestjs/mapped-types';
import { CreateUniversityDto } from './create-university.dto';

export class UpdateUniversityDto extends OmitType(CreateUniversityDto, [
  'acceptConditions' as const,
]) {}
