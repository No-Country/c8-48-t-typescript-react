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
import { CreateScholarshipUniversityDto } from './dto/create-scholarshipUniversity.dto';
import { ScholarshipUniversity } from './entities/scholarshipUniversity.entity';
import { handleDBErrors } from '../shared/helper/ErrorExceptionDB';

@Injectable()
export class UniversityService {
  constructor(
    @InjectRepository(University)
    private readonly universityRepository: Repository<University>,
    @InjectRepository(ScholarshipUniversity)
    private readonly scholarshipUniversityRepository: Repository<ScholarshipUniversity>,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
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

  async findSearch(search: string, body: any) {
    const user = this.userRepository.createQueryBuilder('user');
    user.innerJoinAndSelect('user.university', 'university');
    if (search) {
      user
        .leftJoinAndSelect('university.country', 'country')
        .where('user.fullName LIKE :search')
        .orWhere('country.name LIKE :search')
        .andWhere('user.isActive is true')
        .setParameter('search', `%${search}%`);
    }

    if (body?.fullName) user.orWhere(`user.fullName LIKE ${body?.fullName}`);
    if (body?.country) user.orWhere(`country.name LIKE ${body?.country}`);

    return user.getMany();
  }

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
  }

  async createScholarship(
    createScholarshipUniversityDto: CreateScholarshipUniversityDto,
    idUniversity: string,
  ) {
    const dataHelper = new DataHelper();
    const scholarshipUniversity = this.scholarshipUniversityRepository.create({
      ...createScholarshipUniversityDto,
      university: { idUniversity: idUniversity },
    });

    try {
      await this.scholarshipUniversityRepository.save(scholarshipUniversity);
      dataHelper.success = true;
      dataHelper.data = scholarshipUniversity;
    } catch (error) {
      handleDBErrors(error);
    }

    return dataHelper;
  }

  async getScholarships(idUniversity: string) {
    const dataHelper = new DataHelper();
    const scholarships = await this.scholarshipUniversityRepository.find({
      where: { university: { idUniversity: idUniversity } },
    });
    dataHelper.success = true;
    dataHelper.data = scholarships;
    return dataHelper;
  }
}
