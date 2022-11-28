import { Global, Module } from '@nestjs/common';
import { ValidatorService } from './services/validator.service';
import { AwsS3Service } from './services/aws-s3.service';
import { GeneratorService } from './services/generator.service';

const providers = [ValidatorService, AwsS3Service, GeneratorService];

@Global()
@Module({
  providers,
  exports: [...providers],
})
export class SharedModule {}
