import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
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

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
    private readonly universityService: UniversityService,
    private awsS3Service: AwsS3Service,
  ) {}

  async create(createUserDto: CreateUserDto, file?: iFile) {
    try {
      const { password, ...userDate } = createUserDto;

      if (file) {
        const key = await this.awsS3Service.uploadImage(file);
        userDate.urlProfile = key;
      }

      const user = this.userRepository.create({
        ...userDate,
        password: bcrypt.hashSync(password, 10),
      });
      await this.userRepository.save(user);

      return user;
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  async createUniversity(
    createUniversityDto: CreateUniversityDto,
    file: iFile,
  ) {
    const { fullName, email, password } = createUniversityDto;
    const user = await this.create({ fullName, email, password }, file);
    try {
      await this.universityService.create(createUniversityDto, user);
      return { fullName, email };
    } catch (error) {
      throw new InternalServerErrorException('Error interno en server');
    }
  }

  async createAthlete(createAthleteDto: CreateAthleteDto) {
    const { fullName, email, password } = createAthleteDto;
    await this.create({ fullName, email, password });
    return { fullName, email };
  }

  async login(loginUserDto: LoginUserDto) {
    const { email, password } = loginUserDto;

    const user = await this.userRepository.findOne({
      where: { email },
      select: { email: true, password: true, fullName: true },
    });

    if (!user) throw new UnauthorizedException('Credenciales no válidas');
    if (!bcrypt.compareSync(password, user.password))
      throw new UnauthorizedException('Credenciales no válidas');
    return {
      ok: true,
      user: {
        email: user.email,
        fullName: user.fullName,
      },
      jwt: this.jwtService.sign({ email }),
    };
  }

  async findOne(id: string) {
    const user = await this.userRepository.findOne({
      where: { idUser: id },
      relations: { athlete: true },
    });

    if (!user) throw new BadRequestException('User not found');

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

  private handleDBErrors(error: any): never {
    if (error.code === '23505') {
      throw new BadRequestException(error.detail);
    }
    console.log(error);
    console.log(process.env.AWS_ACCESS_KEY_ID);
    console.log(process.env.AWS_SECRET_ACCESS_KEY);
    throw new InternalServerErrorException(
      'Error interno, por favor contacte al administrador',
    );
  }
}
