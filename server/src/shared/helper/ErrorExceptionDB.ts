import { DataHelper } from './DataHelper';
import {
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';

export const handleDBErrors = (error: any): never => {
  const dataHelper = new DataHelper();
  if (error.code === '23505') {
    dataHelper.errors = [
      {
        message: error.detail,
      },
    ];
    throw new BadRequestException(dataHelper);
  }
  dataHelper.errors = [
    {
      message: 'Error interno, por favor contacte al administrador',
    },
  ];
  throw new InternalServerErrorException(dataHelper);
};
