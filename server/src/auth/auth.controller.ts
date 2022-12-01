import { AuthService } from './auth.service';
import {
  Controller,
  Post,
  Body,
  HttpCode,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { CreateAthleteDto } from '../athlete/dto/create-athlete.dto';
import { CreateUniversityDto } from 'src/university/dto/create-university.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { iFile } from 'src/shared/interfaces/file-interfaces';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register/athlete')
  createAthlete(@Body() createAthleteDto: CreateAthleteDto) {
    return this.authService.createAthlete(createAthleteDto);
  }

  @Post('register/university')
  @UseInterceptors(FileInterceptor('file'))
  createUniversity(
    @UploadedFile() file: iFile,
    @Body() createUniversityDto: CreateUniversityDto,
  ) {
    return this.authService.createUniversity(createUniversityDto, file);
  }

  @Post('login')
  @HttpCode(200)
  loginUser(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }
}
