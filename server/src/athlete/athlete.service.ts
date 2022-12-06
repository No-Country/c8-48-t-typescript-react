import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { UpdateAthleteDto } from './dto/update-athlete.dto';
import { Athlete } from './entities/athlete.entity';
import { User } from '../auth/entities/user.entity';
import { CreateAthleteDto } from './dto/create-athlete.dto';
import { DataHelper } from '../shared/helper/DataHelper';

@Injectable()
export class AthleteService {
  constructor(
    @InjectRepository(Athlete)
    private readonly athletesRepository: Repository<Athlete>,
  ) {}

  private readonly select = {
    idAthlete: true,
    age: true,
    height: true,
    weight: true,
    idCountry: true,
    strength: true,
    gameVision: true,
    leadership: true,
    temperance: true,
    user: {
      fullName: true,
      email: true,
      urlProfile: true,
    },
  };

  findAll() {
    return `This action returns all athlete`;
  }

  async createAthlete(createAthleteDto: CreateAthleteDto, user: User) {
    try {
      const athlete = this.athletesRepository.create({
        ...createAthleteDto,
        user,
      });
      await this.athletesRepository.save(athlete);
    } catch (error) {
      throw new InternalServerErrorException(
        'Error interno, contacte al administrador',
      );
    }
  }

  async findOne(id: string) {
    const dataHelper = new DataHelper();
    const athletes = await this.athletesRepository.findOne({
      where: { idAthlete: id },
      relations: { user: true },
      select: this.select,
    });

    if (!athletes) {
      dataHelper.errors = [
        {
          message: 'Athletes not found',
        },
      ];
      throw new BadRequestException(dataHelper);
    }
    dataHelper.success = true;
    dataHelper.data = athletes;
    return dataHelper;
  }

  async update(id: string, updateAthleteDto: UpdateAthleteDto) {
    const athlete = await this.athletesRepository.findOne({
      where: { idAthlete: id },
      relations: { user: true },
    });

    if (!athlete) throw new BadRequestException('Athlete not found');

    try {
      if (!athlete.user) {
        await this.createAthlete(updateAthleteDto, athlete.user);
      } else {
        await this.athletesRepository.update(
          { idAthlete: id },
          {
            ...updateAthleteDto,
            user: athlete,
            updateAt: new Date(),
          },
        );
      }
      return {
        ...updateAthleteDto,
      };
    } catch (error) {
      throw new InternalServerErrorException(
        'Error interno, contacte al administrador',
      );
    }
  }
}
