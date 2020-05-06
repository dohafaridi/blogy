import { Repository, EntityRepository } from 'typeorm';
import {
  ConflictException,
  UnprocessableEntityException,
} from '@nestjs/common';

import { UserEntity } from './user.entity';
import { RegisterReqDto, LoginReqDto, GetSessionResDto } from './user.dto';

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
  async ensureUsernameUnique(username: string) {
    const user = await this.findOne({ username });
    console.log(user);
    if (user) {
      throw new ConflictException(
        `'Username ${username} is unavailable. Please try another.'`,
      );
    }
  }

  async register(registerReq: RegisterReqDto): Promise<GetSessionResDto> {
    const { username, email, bio, password } = registerReq;
    await this.ensureUsernameUnique(username);

    const newUser = await this.create({
      username,
      email,
      bio,
      password,
    }).save();

    return {
      id: newUser.id,
      username: newUser.username,
    };
  }

  async login(LoginReqDto: LoginReqDto): Promise<GetSessionResDto> {
    const targetUser = await this.findOne(LoginReqDto);

    if (!targetUser) {
      throw new UnprocessableEntityException(
        'The username and/or password you entered did not match our records. Please double-check and try again.',
      );
    }

    return {
      id: targetUser.id,
      username: targetUser.username,
    };
  }
}
