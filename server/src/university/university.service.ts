import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUniversityDto } from './dto/create-university.dto';
import { University } from './entities/university.entity';

@Injectable()
export class UniversityService {
  constructor(
    @InjectRepository(University)
    private readonly universityRepository: Repository<University>,
  ) {}

  async create(createUniversityDto: CreateUniversityDto, user: User) {
    try {
      const university = this.universityRepository.create({
        ...createUniversityDto,
        user,
      });
      await this.universityRepository.save(university);
      return university;
    } catch (error) {
      throw new InternalServerErrorException('Error, internal server');
    }
  }
}
