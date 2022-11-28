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
    return this.uuid() + '.' + ext;
  }

  getS3PublicUrl(key: string): string {
    if (!key) {
      throw new TypeError('key is required');
    }
    return `https://s3.${this.configService.get(
      'AWS.region',
    )}.amazonaws.com/${this.configService.get('AWS.bucketName')}/${key}`;
  }
}
