import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { CreateDeportistaDto } from './dto/create-deportista.dto';
import { UpdateDeportistaDto } from './dto/update-deportista.dto';
import { Deportista } from './entities/deportista.entity';
import { User } from '../auth/entities/user.entity';
import { iFile } from 'src/shared/interfaces/file-interfaces';
import { ValidatorService } from 'src/shared/services/validator.service';
import { AwsS3Service } from 'src/shared/services/aws-s3.service';
import { GeneratorService } from 'src/shared/services/generator.service';

@Injectable()
export class DeportistaService {
  constructor(
    @InjectRepository(Deportista)
    private readonly deportistaRepository: Repository<Deportista>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private validatorService: ValidatorService,
    private awsS3Service: AwsS3Service,
    private generatorService: GeneratorService,
  ) {}

  private readonly select = {
    idDeportista: true,
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

  create(createDeportistaDto: CreateDeportistaDto) {
    return 'This action adds a new deportista';
  }

  findAll() {
    return `This action returns all deportista`;
  }

  async findOne(id: string) {
    const deportista = await this.deportistaRepository.findOne({
      where: { idDeportista: id },
      relations: { user: true },
      select: this.select,
    });

    if (!deportista) throw new BadRequestException('Deportista not found');

    const { user, idDeportista, ...deportistaDetails } = deportista;

    return {
      idDeportista,
      fullName: user.fullName,
      email: user.email,
      ...deportistaDetails,
    };
  }

  async update(id: string, updateDeportistaDto: UpdateDeportistaDto) {
    const user = await this.userRepository.findOne({
      where: { idUser: id },
      relations: { deportista: true },
    });

    if (!user) throw new BadRequestException('Deportista not found');

    try {
      let deportista;
      if (!user.deportista) {
        deportista = this.deportistaRepository.create({
          idDeportista: id,
          user,
          ...updateDeportistaDto,
        });
        await this.deportistaRepository.save(deportista);
      } else {
        deportista = await this.deportistaRepository.update(
          { idDeportista: id },
          {
            ...updateDeportistaDto,
            user,
            updateAt: new Date(),
          },
        );
      }
      return {
        ...updateDeportistaDto,
      };
    } catch (error) {
      throw new InternalServerErrorException(
        'Error interno, contacte al administrador',
      );
    }
  }

  async uploadFile(file: iFile, idUser: string) {
    if (file && !this.validatorService.isImage(file.mimetype))
      throw new BadRequestException('file, not found ');
    const key = await this.awsS3Service.uploadImage(file);
  }

  remove(id: number) {
    return `This action removes a #${id} deportista`;
  }
}
