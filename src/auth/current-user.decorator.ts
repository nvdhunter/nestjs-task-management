import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from './user.entity';

export const CurrentUser = createParamDecorator(
  (_, ctx: ExecutionContext): User => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);
