import { Injectable } from '@nestjs/common';
import { v4 as UUID } from 'uuid';
@Injectable()
export class GeneratorService {
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
    return `https://s3.${process.env.AWS_REGION}.amazonaws.com/${process.env.AWS_S3_BUCKET_NAME}/${key}`;
  }
}
