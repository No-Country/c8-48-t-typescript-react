import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AthleteService } from './athlete.service';
import { UpdateAthleteDto } from './dto/update-athlete.dto';
import { UpdateAcademicAthleteDto } from './dto/update-academicAthlete';

@Controller('athlete')
export class AthleteController {
  constructor(private readonly athleteService: AthleteService) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll() {
    return this.athleteService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.athleteService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateAthletesDto: UpdateAthleteDto,
  ) {
    return this.athleteService.update(id, updateAthletesDto);
  }
  @Patch('academic/:id')
  @UseGuards(AuthGuard('jwt'))
  updateAcademicAthlete(
    @Param('id', ParseUUIDPipe) idAthlete: string,
    @Body() updateAcademicAthlete: UpdateAcademicAthleteDto,
  ) {
    return this.athleteService.updateAcademicAthlete(
      updateAcademicAthlete,
      idAthlete,
    );
  }
}
