import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MultimediaService } from './multimedia.service';

@Controller('multimedia')
export class MultimediaController {
  constructor(private readonly multimediaService: MultimediaService) {}
}
