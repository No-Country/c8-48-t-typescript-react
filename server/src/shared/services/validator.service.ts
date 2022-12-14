import { Injectable } from '@nestjs/common';

@Injectable()
export class ValidatorService {
  isImage(mimeType: string): boolean {
    const imageMimeTypes = ['image/jpeg', 'image/png'];
    return imageMimeTypes.includes(mimeType);
  }

  isDocument(mimeType: string): boolean {
    const documentMimeTypes = ['application/pdf'];
    return documentMimeTypes.includes(mimeType);
  }
}
