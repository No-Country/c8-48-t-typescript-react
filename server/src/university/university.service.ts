import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUniversityDto } from './dto/create-university.dto';
import { University } from './entities/university.entity';
import { UpdateUniversityDto } from './dto/update-university.dto';

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

  async update(updateUniversityDto: UpdateUniversityDto, id: string) {
    try {
      this.universityRepository.update(
        {
          idUniversity: id,
        },
        { ...updateUniversityDto },
      );
    } catch (error) {
      throw new InternalServerErrorException('Error, interno server');
    }

    return updateUniversityDto;
  }

  async findOne(id: string) {
    try {
      const university = await this.universityRepository.findOne({
        where: { idUniversity: id },
        relations: { user: true },
      });

      if (!university) throw new BadRequestException('University not found');

      const { user, idUniversity, ...universityDetails } = university;

      return {
        idUniversity,
        fullName: user.fullName,
        email: user.email,
        urlProfile: user.urlProfile,
        ...universityDetails,
      };
    } catch (error) {
      throw new InternalServerErrorException('Error, internal server');
    }
  }
}
