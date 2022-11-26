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
import { DeportistaService } from './deportista.service';
import { CreateDeportistaDto } from './dto/create-deportista.dto';
import { UpdateDeportistaDto } from './dto/update-deportista.dto';

@Controller('deportista')
export class DeportistaController {
  constructor(private readonly deportistaService: DeportistaService) {}

  @Post(':id')
  create(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() createDeportistaDto: CreateDeportistaDto,
  ) {
    return this.deportistaService.create(createDeportistaDto);
  }

  @Get()
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

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deportistaService.remove(+id);
  }
}
