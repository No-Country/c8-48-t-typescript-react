import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  ParseUUIDPipe,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
/* import { iFile } from 'src/shared/interfaces/file-interfaces'; */
import { AthleteService } from './athlete.service';
import { UpdateAthleteDto } from './dto/update-athlete.dto';

@Controller('athlete')
export class AthleteController {
  constructor(private readonly athleteService: AthleteService) {}

  @Post('image/:id')
  @UseInterceptors(FileInterceptor('file'))
  @UseGuards(AuthGuard('jwt'))
  uploadImage /*  @UploadedFile() file: iFile,
    @Param('id', ParseUUIDPipe) idUser: string, */() {
    return ''; //this.multimediaService.uploadImage(file, idUser);
  }

  @Post('document/:id')
  @UseInterceptors(FileInterceptor('file'))
  @UseGuards(AuthGuard('jwt'))
  uploadDocument /* @UploadedFile() file: iFile,
    @Param('id', ParseUUIDPipe) idUser: string, */() {
    return ''; //this.multimediaService.uploadDocument(file, idUser);
  }

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
}
