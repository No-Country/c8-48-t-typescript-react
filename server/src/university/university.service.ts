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
import { DataHelper } from '../shared/helper/DataHelper';

@Injectable()
export class UniversityService {
  constructor(
    @InjectRepository(University)
    private readonly universityRepository: Repository<University>,
  ) {}

  private readonly select = {
    idUniversity: true,

    website: true,
    linkedin: true,
    description: true,
    user: {
      fullName: true,
      email: true,
      urlProfile: true,
    },
  };

  async create(createUniversityDto: CreateUniversityDto, user: User) {
    try {
      const university = this.universityRepository.create({
        ...createUniversityDto,
        user,
      });
      await this.universityRepository.save(university);
      return university;
    } catch (error) {
      throw new InternalServerErrorException('Error interno en server');
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
    const dataHelper = new DataHelper();
    try {
      const university = await this.universityRepository.findOne({
        where: { idUniversity: id },
        relations: { user: true, country: true },
        select: this.select,
      });

      if (!university) {
        dataHelper.errors = [
          {
            message: 'University not found',
          },
        ];
        throw new BadRequestException(dataHelper);
      }
      dataHelper.success = true;
      dataHelper.data = university;
      return dataHelper;
    } catch (error) {
      throw new InternalServerErrorException('Error, internal server');
    }
  }
}
