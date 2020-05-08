import { createParamDecorator } from '@nestjs/common';

export const JwtSession = createParamDecorator((data: any, req: any) => {
  return req.user;
});
