import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { iFile } from 'src/shared/interfaces/file-interfaces';
import { AwsS3Service } from 'src/shared/services/aws-s3.service';
import { ValidatorService } from 'src/shared/services/validator.service';
import { Repository } from 'typeorm';
import { AuthService } from '../auth/auth.service';
import { Multimedia } from './entities/multimedia.entity';

@Injectable()
export class MultimediaService {
  constructor(
    @InjectRepository(Multimedia)
    private readonly multimediaRepository: Repository<Multimedia>,
    private validatorService: ValidatorService,
    private awsS3Service: AwsS3Service,
    private authService: AuthService,
  ) {}

  async uploadImage(file: iFile, idUser: string) {
    const user = await this.authService.findOne(idUser);

    if (file && !this.validatorService.isImage(file.mimetype))
      throw new BadRequestException('file, error not ext jpeg or png');

    try {
      const key = await this.awsS3Service.uploadImage(file);
      const multimedia = this.multimediaRepository.create({
        url: key,
        type: 'I',
        user,
      });
      await this.multimediaRepository.save(multimedia);
      return multimedia;
    } catch (error) {
      throw new BadRequestException('Error');
    }
  }

  async uploadDocument(file: iFile, idUser: string) {
    const user = await this.authService.findOne(idUser);
    if (file && !this.validatorService.isDocument(file.mimetype))
      throw new BadRequestException('file, error not ext pdf');

    try {
      const key = await this.awsS3Service.uploadImage(file);
      const multimedia = this.multimediaRepository.create({
        url: key,
        type: 'D',
        user,
      });
      await this.multimediaRepository.save(multimedia);
      return multimedia;
    } catch (error) {
      throw new BadRequestException('Error');
    }
  }

  async uploadVideoUrl(urlVideo: string, idUser: string) {
    const user = await this.authService.findOne(idUser);
    try {
      const multimedia = this.multimediaRepository.create({
        url: urlVideo,
        type: 'V',
        user,
      });
      await this.multimediaRepository.save(multimedia);
      return multimedia;
    } catch (error) {
      throw new BadRequestException('Error');
    }
  }

  async findAllImagesUser(idUser: string) {
    return this.multimediaRepository.find({
      where: { user: { idUser }, type: 'I' },
    });
  }

  async findAllVideos(idUser: string) {
    return this.multimediaRepository.find({
      where: { user: { idUser }, type: 'V' },
    });
  }

  async findOneDocument(idUser: string) {
    return this.multimediaRepository.findOne({
      where: { user: { idUser }, type: 'D' },
    });
  }

  async uploadPerfil(file: iFile, idUser: string) {
    if (file && !this.validatorService.isImage(file.mimetype))
      throw new BadRequestException('file, error not ext jpeg or png');
    try {
      const key = await this.awsS3Service.uploadImage(file);
      const user = await this.authService.updateUser(
        { urlPerfil: key },
        idUser,
      );
      return user;
    } catch (error) {
      throw new BadRequestException('Error');
    }
  }
}
