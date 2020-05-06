import { Controller, Post, Body } from '@nestjs/common';

import { UserService } from './user.service';
import { RegisterReqDto, LoginReqDto } from './user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body() RegisterReqDto: RegisterReqDto) {
    const newUser = this.userService.register(RegisterReqDto);
    return newUser;
  }

  @Post('login')
  login(@Body() loginReq: LoginReqDto) {
    const targetUser = this.userService.login(loginReq);
    return targetUser;
  }
}
