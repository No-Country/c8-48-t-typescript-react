import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import type { iFile } from '../interfaces/file-interfaces';
import { GeneratorService } from './generator.service';
import AWS from 'aws-sdk';
import mime from 'mime-types';

@Injectable()
export class AwsS3Service {
  private readonly s3: AWS.S3;
  constructor(
    private readonly configService: ConfigService,
    private generatorService: GeneratorService,
  ) {
    const options: AWS.S3.Types.ClientConfiguration = {
      region: configService.get('AWS.region'),
    };
    this.s3 = new AWS.S3(options);
  }

  async uploadImage(file: iFile) {
    const fileName = this.generatorService.fileName(
      <string>mime.extension(file.mimetype),
    );

    const key = 'images/' + fileName;
    const image = await this.s3
      .putObject({
        Bucket: this.configService.get('AWS.bucketName') || '',
        Body: file.buffer,
        ACL: 'public-read',
        Key: key,
      })
      .promise();

    console.log(image);
    return key;
  }
}
