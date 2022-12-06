import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';

import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import { iFile } from 'src/shared/interfaces/file-interfaces';
import { MultimediaService } from './multimedia.service';

@Controller('multimedia')
export class MultimediaController {
  constructor(private readonly multimediaService: MultimediaService) {}

  @Post('image/:id')
  @UseInterceptors(FileInterceptor('file'))
  @UseGuards(AuthGuard('jwt'))
  uploadImage(
    @UploadedFile() file: iFile,
    @Param('id', ParseUUIDPipe) idUser: string,
  ) {
    return this.multimediaService.uploadImage(file, idUser);
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

  @Post('video/:id')
  @UseGuards(AuthGuard('jwt'))
  updateUrlVideo(
    @Param('id', ParseUUIDPipe) idUser: string,
    @Body() body: any,
  ) {
    return this.multimediaService.uploadVideoUrl(body.urlVideo, idUser);
  }

  @Get('video/:id')
  @UseGuards(AuthGuard('jwt'))
  findAllVideo(@Param('id', ParseUUIDPipe) idUser: string) {
    return this.multimediaService.findAllVideos(idUser);
  }

  @Post('profile/:id')
  @UseInterceptors(FileInterceptor('file'))
  @UseGuards(AuthGuard('jwt'))
  uploadPerfil(
    @UploadedFile() file: iFile,
    @Param('id', ParseUUIDPipe) idUser: string,
  ) {
    return this.multimediaService.uploadProfile(file, idUser);
  }
}
