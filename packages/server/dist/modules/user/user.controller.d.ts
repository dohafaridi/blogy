import { JwtService } from '@nestjs/jwt';
import { UserService } from './user.service';
import { RegisterReqDto, LoginReqDto, LoginResDto } from './user.dto';
export declare class UserController {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    register(registerReqDto: RegisterReqDto): Promise<any>;
    login(loginReq: LoginReqDto): Promise<LoginResDto>;
    getSession(session: any): any;
}
