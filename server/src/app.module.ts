import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import EnvConfiguration from './config/configuration';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({
      //isGlobal: true,
      //envFilePath: '../.env',
      load: [EnvConfiguration],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('database.host'),
        port: +configService.get('database.port'),
        database: configService.get('database.name'),
        username: configService.get('database.username'),
        password: configService.get('database.password'),
        autoLoadEntities: configService.get('database.autoLoadEntities'),
        synchronize: configService.get('database.synchronize'),
      }),
    }),
    /* TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_DB_HOST,
      port: Number(process.env.POSTGRES_DB_PORT),
      database: process.env.POSTGRES_DB_NAME,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      autoLoadEntities: true,
      synchronize: process.env.NODE_ENV === 'dev',
    }), */
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
