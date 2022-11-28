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
}
