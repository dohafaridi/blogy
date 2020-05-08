import { Controller, Post, Body, Get } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UserService } from './user.service';
import { RegisterReqDto, LoginReqDto, LoginResDto } from './user.dto';
import { UseGuards, JwtAuthGuard, JwtSession } from '../auth/auth.module';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  @Post('register')
  async register(@Body() registerReqDto: RegisterReqDto): Promise<any> {
    // RegisterResDto instead of any
    const session = this.userService.register(registerReqDto);
    return {
      token: this.jwtService.sign(session),
      ...session,
    };
  }

  @Post('login')
  async login(@Body() loginReq: LoginReqDto): Promise<LoginResDto> {
    const session = await this.userService.login(loginReq);
    return {
      token: this.jwtService.sign(session),
      ...session,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('session')
  getSession(@JwtSession() session) {
    return session;
  }
}
