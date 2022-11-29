import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { iFile } from 'src/shared/interfaces/file-interfaces';
import { AwsS3Service } from 'src/shared/services/aws-s3.service';
import { ValidatorService } from 'src/shared/services/validator.service';
import { Repository } from 'typeorm';
import { AuthService } from '../auth/auth.service';
import { Multimedia } from './entities/multimedia.entity';
import { GeneratorService } from '../shared/services/generator.service';

@Injectable()
export class MultimediaService {
  constructor(
    @InjectRepository(Multimedia)
    private readonly multimediaRepository: Repository<Multimedia>,
    private validatorService: ValidatorService,
    private awsS3Service: AwsS3Service,
    private authService: AuthService,
    private generadorService: GeneratorService,
  ) {}

  async uploadImage(file: iFile, idUser: string) {
    const user = await this.authService.findOne(idUser);

    if (file && !this.validatorService.isImage(file.mimetype))
      throw new BadRequestException('File extension should be jpeg or png');

    try {
      const key = await this.awsS3Service.uploadImage(file);
      const multimedia = this.multimediaRepository.create({
        url: key,
        type: 'I',
        user,
      });
      await this.multimediaRepository.save(multimedia);
      return {
        idMultiMedia: multimedia.idMultimedia,
        url: this.generadorService.getS3PublicUrl(key),
        createAt: multimedia.createAt,
      };
    } catch (error) {
      throw new BadRequestException('Error');
    }
  }

  async uploadDocument(file: iFile, idUser: string) {
    const user = await this.authService.findOne(idUser);
    if (file && !this.validatorService.isDocument(file.mimetype))
      throw new BadRequestException('File extension should be pdf');

    try {
      const key = await this.awsS3Service.uploadDocument(file);
      const multimedia = this.multimediaRepository.create({
        url: key,
        type: 'D',
        user,
      });
      await this.multimediaRepository.save(multimedia);
      return {
        idMultimedia: multimedia.idMultimedia,
        url: this.generadorService.getS3PublicUrl(key),
        createAt: multimedia.createAt,
      };
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
      return {
        idMultimedia: multimedia.idMultimedia,
        url: multimedia.url,
        type: multimedia.type,
      };
    } catch (error) {
      console.log(error);
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
      select: {
        idMultimedia: true,
        url: true,
        createAt: true,
      },
    });
  }

  async findOneDocument(idUser: string) {
    return this.multimediaRepository.findOne({
      where: { user: { idUser }, type: 'D' },
    });
  }

  async uploadProfile(file: iFile, idUser: string) {
    if (file && !this.validatorService.isImage(file.mimetype))
      throw new BadRequestException('File extension should be jpeg or png');
    try {
      const key = await this.awsS3Service.uploadImage(file);
      const user = await this.authService.updateUser(
        { urlProfile: key },
        idUser,
      );
      return user;
    } catch (error) {
      throw new BadRequestException('Error');
    }
  }
}
