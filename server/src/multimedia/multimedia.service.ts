import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { iFile } from 'src/shared/interfaces/file-interfaces';
import { AwsS3Service } from 'src/shared/services/aws-s3.service';
import { ValidatorService } from 'src/shared/services/validator.service';
import { Repository } from 'typeorm';
import { Multimedia } from './entities/multimedia.entity';
import { GeneratorService } from '../shared/services/generator.service';
import { User } from 'src/auth/entities/user.entity';
import { DataHelper } from '../shared/helper/DataHelper';
import { handleDBErrors } from '../shared/helper/ErrorExceptionDB';

@Injectable()
export class MultimediaService {
  constructor(
    @InjectRepository(Multimedia)
    private readonly multimediaRepository: Repository<Multimedia>,
    private validatorService: ValidatorService,
    private awsS3Service: AwsS3Service,
    private generadorService: GeneratorService,
  ) {}

  async uploadImage(file: iFile, user: User) {
    const dataHelper = new DataHelper();
    if (file && !this.validatorService.isImage(file.mimetype)) {
      dataHelper.errors = [
        {
          message: 'File extension should be jpeg or png',
        },
      ];
      throw new BadRequestException(dataHelper);
    }

    try {
      const key = await this.awsS3Service.uploadImage(file);
      const multimedia = this.multimediaRepository.create({
        url: key,
        type: 'I',
        user,
      });
      await this.multimediaRepository.save(multimedia);
      dataHelper.success = true;
      dataHelper.data = {
        idMultiMedia: multimedia.idMultimedia,
        url: this.generadorService.getS3PublicUrl(key),
        createAt: multimedia.createAt,
      };
      return dataHelper;
    } catch (error) {
      handleDBErrors(error);
    }
  }

  async uploadDocument(file: iFile, user: User) {
    const dataHelper = new DataHelper();
    if (file && !this.validatorService.isDocument(file.mimetype)) {
      dataHelper.errors = [
        {
          message: 'File extension should be pdf',
        },
      ];
      throw new BadRequestException(dataHelper);
    }

    try {
      const key = await this.awsS3Service.uploadDocument(file);
      const multimedia = this.multimediaRepository.create({
        url: key,
        type: 'D',
        user,
      });
      await this.multimediaRepository.save(multimedia);
      dataHelper.success = true;
      dataHelper.data = {
        idMultimedia: multimedia.idMultimedia,
        url: this.generadorService.getS3PublicUrl(key),
        createAt: multimedia.createAt,
      };
      return dataHelper;
    } catch (error) {
      handleDBErrors(error);
    }
  }

  async uploadVideoUrl(urlVideo: string, user: User) {
    const dataHelper = new DataHelper();
    try {
      const multimedia = this.multimediaRepository.create({
        url: urlVideo,
        type: 'V',
        user,
      });
      await this.multimediaRepository.save(multimedia);
      dataHelper.success = true;
      dataHelper.data = {
        idMultimedia: multimedia.idMultimedia,
        url: multimedia.url,
        type: multimedia.type,
      };
      return dataHelper;
    } catch (error) {
      handleDBErrors(error);
    }
  }
}
