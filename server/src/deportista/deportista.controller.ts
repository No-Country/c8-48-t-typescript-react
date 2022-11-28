import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  ParseUUIDPipe,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import { iFile } from 'src/shared/interfaces/file-interfaces';
import { DeportistaService } from './deportista.service';

import { UpdateDeportistaDto } from './dto/update-deportista.dto';
import { MultimediaService } from '../multimedia/multimedia.service';

@Controller('deportista')
export class DeportistaController {
  constructor(
    private readonly deportistaService: DeportistaService,
    private readonly multimediaService: MultimediaService,
  ) {}

  @Post('image/:id')
  @UseInterceptors(FileInterceptor('file'))
  @UseGuards(AuthGuard('jwt'))
  uploadImage(
    @UploadedFile() file: iFile,
    @Param('id', ParseUUIDPipe) idUser: string,
  ) {
    return this.multimediaService.uploadImage(file, idUser);
  }

  @Post('perfil/:id')
  @UseInterceptors(FileInterceptor('file'))
  @UseGuards(AuthGuard('jwt'))
  uploadPerfil(
    @UploadedFile() file: iFile,
    @Param('id', ParseUUIDPipe) idUser: string,
  ) {
    return this.multimediaService.uploadPerfil(file, idUser);
  }

  @Post('document/:id')
  @UseInterceptors(FileInterceptor('file'))
  @UseGuards(AuthGuard('jwt'))
  uploadDocument(
    @UploadedFile() file: iFile,
    @Param('id', ParseUUIDPipe) idUser: string,
  ) {
    return this.multimediaService.uploadDocument(file, idUser);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll() {
    return this.deportistaService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.deportistaService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateDeportistaDto: UpdateDeportistaDto,
  ) {
    return this.deportistaService.update(id, updateDeportistaDto);
  }
}
