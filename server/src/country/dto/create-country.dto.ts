import { StringForNextToken } from 'aws-sdk/clients/s3control';

export class CreateCountryDto {
  code: string;
  name: string;
  flag: string;
}
