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

@Injectable()
export class AthleteService {
  constructor(
    @InjectRepository(Athlete)
    private readonly athletesRepository: Repository<Athlete>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  private readonly select = {
    idAthletes: true,
    age: true,
    altura: true,
    peso: true,
    idPais: true,
    fortaleza: true,
    visionJuego: true,
    liderazgo: true,
    templaza: true,
    user: {
      fullName: true,
      email: true,
    },
  };

  findAll() {
    return `This action returns all Athlete`;
  }

  async findOne(id: string) {
    const athletes = await this.athletesRepository.findOne({
      where: { idAthlete: id },
      relations: { user: true },
      select: this.select,
    });

    if (!athletes) throw new BadRequestException('Athletes not found');

    const { user, idAthlete: idAthlete, ...athleteDetails } = athletes;

    return {
      idAthlete,
      fullName: user.fullName,
      email: user.email,
      ...athleteDetails,
    };
  }

  async update(id: string, updateAthleteDto: UpdateAthleteDto) {
    const user = await this.userRepository.findOne({
      where: { idUser: id },
      relations: { athlete: true },
    });

    if (!user) throw new BadRequestException('Athlete not found');

    try {
      let athlete;
      if (!user.athlete) {
        athlete = this.athletesRepository.create({
          idAthlete: id,
          user,
          ...updateAthleteDto,
        });
        await this.athletesRepository.save(athlete);
      } else {
        athlete = await this.athletesRepository.update(
          { idAthlete: id },
          {
            ...updateAthleteDto,
            user,
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
