import { Module } from '@nestjs/common';
import { DeportistaService } from './deportista.service';
import { DeportistaController } from './deportista.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Deportista } from './entities/deportista.entity';
import { AuthModule } from '../auth/auth.module';
import { MultimediaModule } from '../multimedia/multimedia.module';

@Module({
  controllers: [DeportistaController],
  providers: [DeportistaService],
  imports: [
    TypeOrmModule.forFeature([Deportista]),
    AuthModule,
    MultimediaModule,
  ],
  exports: [TypeOrmModule],
})
export class DeportistaModule {}
