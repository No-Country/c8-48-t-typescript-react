import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { MultimediaService } from './multimedia.service';

@Controller('multimedia')
export class MultimediaController {
  constructor(private readonly multimediaService: MultimediaService) {}

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
}
