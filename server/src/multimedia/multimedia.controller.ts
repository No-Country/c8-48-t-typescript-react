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
import { User } from 'src/auth/entities/user.entity';
import { GetUser } from 'src/shared/decorators/get-user.decorator';
import { iFile } from 'src/shared/interfaces/file-interfaces';
import { MultimediaService } from './multimedia.service';

@Controller('multimedia')
export class MultimediaController {
  constructor(private readonly multimediaService: MultimediaService) {}

  @Post('image')
  @UseInterceptors(FileInterceptor('file'))
  @UseGuards(AuthGuard('jwt'))
  uploadImage(@UploadedFile() file: iFile, @GetUser() user: User) {
    return this.multimediaService.uploadImage(file, user);
  }

  @Post('document')
  @UseInterceptors(FileInterceptor('file'))
  @UseGuards(AuthGuard('jwt'))
  uploadDocument(@UploadedFile() file: iFile, @GetUser() user: User) {
    return this.multimediaService.uploadDocument(file, user);
  }

  @Post('video')
  @UseGuards(AuthGuard('jwt'))
  updateUrlVideo(@GetUser() user: User, @Body() body: any) {
    return this.multimediaService.uploadVideoUrl(body.urlVideo, user);
  }
}
