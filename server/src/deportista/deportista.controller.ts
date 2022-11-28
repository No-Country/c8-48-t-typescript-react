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

@Controller('deportista')
export class DeportistaController {
  constructor(private readonly deportistaService: DeportistaService) {}

  @Post('image/:id')
  @UseInterceptors(FileInterceptor('file'))
  @UseGuards(AuthGuard('jwt'))
  uploadImage(
    @UploadedFile() file: iFile,
    @Param('id', ParseUUIDPipe) idUser: string,
  ) {
    return this.deportistaService.uploadImage(file, idUser);
  }

  @Post('document/:id')
  @UseInterceptors(FileInterceptor('file'))
  @UseGuards(AuthGuard('jwt'))
  uploadDocument(
    @UploadedFile() file: iFile,
    @Param('id', ParseUUIDPipe) idUser: string,
  ) {
    return this.deportistaService.uploadDocument(file, idUser);
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
