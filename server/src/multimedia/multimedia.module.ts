import { Module } from '@nestjs/common';
import { MultimediaService } from './multimedia.service';
import { MultimediaController } from './multimedia.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Multimedia } from './entities/multimedia.entity';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [MultimediaController],
  providers: [MultimediaService],
  imports: [TypeOrmModule.forFeature([Multimedia]), AuthModule],
  exports: [TypeOrmModule, MultimediaService],
})
export class MultimediaModule {}
