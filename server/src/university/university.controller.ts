import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UniversityService } from './university.service';
import { UpdateUniversityDto } from './dto/update-university.dto';
import { AuthGuard } from '@nestjs/passport';
import { CreateScholarshipUniversityDto } from './dto/create-scholarshipUniversity.dto';

@Controller('university')
export class UniversityController {
  constructor(private readonly universityService: UniversityService) {}
  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.universityService.findOne(id);
  }
  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  updateUniversity(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateUniversity: UpdateUniversityDto,
  ) {
    return this.universityService.update(updateUniversity, id);
  }

  @Post('scholarship/:id')
  @UseGuards(AuthGuard('jwt'))
  createScholarship(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() scholarshipUniversityDto: CreateScholarshipUniversityDto,
  ) {
    return this.universityService.createScholarship(
      scholarshipUniversityDto,
      id,
    );
  }

  @Get('scholarship/:id')
  @UseGuards(AuthGuard('jwt'))
  getScholarships(@Param('id', ParseUUIDPipe) id: string) {
    return this.universityService.getScholarships(id);
  }
}
