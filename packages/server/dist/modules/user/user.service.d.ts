import { UserRepository } from './user.repository';
import { RegisterReqDto, LoginReqDto, GetSessionResDto } from './user.dto';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    register(registerReq: RegisterReqDto): Promise<GetSessionResDto>;
    login(loginReqDto: LoginReqDto): Promise<GetSessionResDto>;
}
