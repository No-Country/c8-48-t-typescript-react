import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { v4 as UUID } from 'uuid';
@Injectable()
export class GeneratorService {
  constructor(private readonly configService: ConfigService) {}

  uuid(): string {
    return UUID();
  }

  fileName(ext: string): string {
    const fileName = this.uuid() + '.' + ext;
    return fileName;
  }

  getS3PublicUrl(key: string): string {
    if (!key) {
      throw new TypeError('key is required');
    }
    const UrlS3 = `https://s3.${this.configService.get(
      'AWS.region',
    )}.amazonaws.com/${this.configService.get('AWS.bucketName')}/${key}`;
    return UrlS3;
  }
}
