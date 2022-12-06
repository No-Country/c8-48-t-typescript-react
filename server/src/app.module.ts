import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AthleteModule } from './athlete/athlete.module';
import { SharedModule } from './shared/shared.module';
import { MultimediaModule } from './multimedia/multimedia.module';
import { UniversityModule } from './university/university.module';
import { SeedModule } from './seed/seed.module';
import { CountryModule } from './country/country.module';
import EnvConfiguration from './config/configuration';

@Module({
  imports: [
    AuthModule,
    AthleteModule,
    ConfigModule.forRoot({
      envFilePath: ['.env', '../.env'],
      load: [EnvConfiguration],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('database.host'),
        port: configService.get('database.port'),
        database: configService.get('database.name'),
        username: configService.get('database.username'),
        password: configService.get('database.password'),
        autoLoadEntities: configService.get('database.autoLoadEntities'),
        synchronize: configService.get('database.synchronize'),
      }),
    }),
    SharedModule,
    MultimediaModule,
    UniversityModule,
    SeedModule,
    CountryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
