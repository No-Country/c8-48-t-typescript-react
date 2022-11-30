import {
  Body,
  Controller,
  Param,
  ParseUUIDPipe,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { UniversityService } from './university.service';
import { UpdateUniversityDto } from './dto/update-university.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('university')
export class UniversityController {
  constructor(private readonly universityService: UniversityService) {}

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  updateUniversity(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateUniversity: UpdateUniversityDto,
  ) {
    return this.universityService.update(updateUniversity, id);
  }
}
