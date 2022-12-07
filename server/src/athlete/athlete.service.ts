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
import { UpdateAcademicAthleteDto } from './dto/update-academicAthlete';
import { AcademicAthlete } from './entities/academicAthlete.entity';
import { handleDBErrors } from '../shared/helper/ErrorExceptionDB';

@Injectable()
export class AthleteService {
  constructor(
    @InjectRepository(Athlete)
    private readonly athletesRepository: Repository<Athlete>,
    @InjectRepository(AcademicAthlete)
    private readonly academicAthleteRepository: Repository<AcademicAthlete>,
  ) {}

  private readonly select = {
    idAthlete: true,
    age: true,
    height: true,
    weight: true,
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

  async createAthlete(updateAthleteDto: UpdateAthleteDto, user: User) {
    try {
      const athlete = this.athletesRepository.create({
        ...updateAthleteDto,
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
      relations: { user: true, country: true },
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
    const dataHelper = new DataHelper();
    const athlete = await this.athletesRepository.findOne({
      where: { idAthlete: id },
      relations: { user: true },
    });

    if (!athlete) {
      dataHelper.errors = [
        {
          message: 'Athlete not found',
        },
      ];
      throw new BadRequestException(dataHelper);
    }

    try {
      if (!athlete.user) {
        await this.createAthlete(updateAthleteDto, athlete.user);
      } else {
        await this.athletesRepository.update(
          { idAthlete: id },
          {
            ...updateAthleteDto,
            updateAt: new Date(),
          },
        );
      }
      dataHelper.success = true;
      dataHelper.data = updateAthleteDto;
      return dataHelper;
    } catch (error) {
      throw new InternalServerErrorException(
        'Error interno, contacte al administrador',
      );
    }
  }

  async createAcademicAthlete(
    updateAcademicAthleteDto: UpdateAcademicAthleteDto,
    idAthlete: string,
  ) {
    try {
      const academicAthlete = this.academicAthleteRepository.create({
        ...updateAcademicAthleteDto,
        athlete: { idAthlete: idAthlete },
      });
      await this.academicAthleteRepository.save(academicAthlete);
      return academicAthlete;
    } catch (error) {
      handleDBErrors(error);
    }
  }

  async updateAcademicAthlete(
    updateAcademicAthleteDto: UpdateAcademicAthleteDto,
    idAthlete: string,
  ) {
    const dataHelper = new DataHelper();
    const academicAthlete = await this.academicAthleteRepository.findOne({
      where: {
        athlete: { idAthlete: idAthlete },
      },
    });

    if (!academicAthlete) {
      dataHelper.success = true;
      dataHelper.data = await this.createAcademicAthlete(
        updateAcademicAthleteDto,
        idAthlete,
      );
    } else {
      await this.academicAthleteRepository.update(
        {
          athlete: { idAthlete: idAthlete },
        },
        {
          ...updateAcademicAthleteDto,
        },
      );
      dataHelper.success = true;
      dataHelper.data = updateAcademicAthleteDto;
    }

    return dataHelper;
  }
}
