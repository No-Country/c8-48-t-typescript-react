import {
  createParamDecorator,
  ExecutionContext,
  InternalServerErrorException,
} from '@nestjs/common';
import { DataHelper } from '../helper/DataHelper';

export const GetUser = createParamDecorator(
  (data: any, ctx: ExecutionContext) => {
    const dataHelper = new DataHelper();
    const req = ctx.switchToHttp().getRequest();
    const user = req.user;

    if (!user) {
      dataHelper.errors = [
        {
          message: 'User not found',
        },
      ];
      throw new InternalServerErrorException(dataHelper);
    }

    return !data ? user : user[data];
  },
);
