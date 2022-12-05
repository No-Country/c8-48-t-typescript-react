import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { LoginUserDto } from './dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUniversityDto } from '../university/dto/create-university.dto';
import { UniversityService } from '../university/university.service';
import { CreateAthleteDto } from '../athlete/dto/create-athlete.dto';
import { iFile } from 'src/shared/interfaces/file-interfaces';
import { AwsS3Service } from 'src/shared/services/aws-s3.service';
import { DataHelper } from 'src/shared/helper/DataHelper';
import { handleDBErrors } from 'src/shared/helper/ErrorExceptionDB';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
    private readonly universityService: UniversityService,
    private awsS3Service: AwsS3Service,
  ) {}

  async create(createUserDto: CreateUserDto, file?: iFile) {
    const { password, ...userDate } = createUserDto;
    const user = this.userRepository.create({
      ...userDate,
      password: bcrypt.hashSync(password, 10),
    });
    try {
      if (file) {
        const key = await this.awsS3Service.uploadImage(file);
        userDate.urlProfile = key;
      }
      await this.userRepository.save(user);
    } catch (error) {
      handleDBErrors(error);
    }

    return user;
  }

  async createUniversity(
    createUniversityDto: CreateUniversityDto,
    file: iFile,
  ) {
    const dataHelper = new DataHelper();
    const { fullName, email, password } = createUniversityDto;
    const user = await this.create(
      { fullName, email, password, rol: 'university' },
      file,
    );
    try {
      await this.universityService.create(createUniversityDto, user);
      dataHelper.success = true;
      dataHelper.data = { fullName, email };
      return dataHelper;
    } catch (error) {
      handleDBErrors(error);
    }
  }

  async createAthlete(createAthleteDto: CreateAthleteDto) {
    const dataHelper = new DataHelper();
    const { fullName, email, password } = createAthleteDto;
    const user = await this.create({
      fullName,
      email,
      password,
      rol: 'athlete',
    });

    dataHelper.success = true;
    dataHelper.data = { fullName, email };
    dataHelper.jwt = this.jwtService.sign({ idUser: user.idUser });

    return dataHelper;
  }

  async login(loginUserDto: LoginUserDto) {
    const dataHelper = new DataHelper();
    const { email, password } = loginUserDto;

    try {
      const user = await this.userRepository.findOne({
        where: { email },
        select: {
          email: true,
          password: true,
          fullName: true,
          idUser: true,
          rol: true,
        },
      });

      if (!user) {
        dataHelper.errors = [
          {
            code: '0',
            message: 'Credenciales no válidas',
            criticality: '',
          },
        ];
        throw new UnauthorizedException(dataHelper);
      }

      if (!bcrypt.compareSync(password, user.password)) {
        dataHelper.errors = [
          {
            code: '0',
            message: 'Credenciales no válidas',
            criticality: '',
          },
        ];
        throw new UnauthorizedException(dataHelper);
      }

      dataHelper.success = true;
      dataHelper.data = {
        email: user.email,
        fullName: user.fullName,
        rol: user.rol,
      };
      dataHelper.jwt = this.jwtService.sign({ idUser: user.idUser });

      return dataHelper;
    } catch (error) {
      handleDBErrors(error);
    }
  }

  async findOne(id: string) {
    const dataHelper = new DataHelper();

    const user = await this.userRepository.findOne({
      where: { idUser: id },
      relations: { athlete: true },
    });

    if (!user) {
      dataHelper.errors = [
        {
          message: 'User not found',
        },
      ];
      throw new NotFoundException(dataHelper);
    }

    return user;
  }

  async updateUser(updateUserDto: UpdateUserDto, idUser: string) {
    const user = await this.findOne(idUser);
    if (updateUserDto.urlProfile) user.urlProfile = updateUserDto.urlProfile;
    if (updateUserDto.fullName) user.fullName = updateUserDto.fullName;

    try {
      this.userRepository.save(user);
    } catch (error) {}

    return user;
  }
}
