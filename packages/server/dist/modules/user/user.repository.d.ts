import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { RegisterReqDto, LoginReqDto, GetSessionResDto } from './user.dto';
export declare class UserRepository extends Repository<UserEntity> {
    ensureUsernameUnique(username: string): Promise<void>;
    register(registerReq: RegisterReqDto): Promise<GetSessionResDto>;
    login(loginReqDto: LoginReqDto): Promise<GetSessionResDto>;
}
