import { Injectable } from '@nestjs/common';

import { UserRepository } from './user.repository';
import { RegisterReqDto, LoginReqDto, GetSessionResDto } from './user.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
  ) {}

  async register(registerReq: RegisterReqDto): Promise<GetSessionResDto> {
    const newUser = await this.userRepository.register(registerReq);
    return newUser;
  }

  async login(loginReqDto: LoginReqDto): Promise<GetSessionResDto> {
    const targetUser = await this.userRepository.login(loginReqDto);
    return targetUser;
  }
}
