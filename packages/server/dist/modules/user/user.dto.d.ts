export declare class GetSessionResDto {
    id: string;
    username: string;
}
export declare class RegisterResDto extends GetSessionResDto {
    token: string;
}
export declare class LoginResDto extends RegisterResDto {
}
export declare class RegisterReqDto {
    username: string;
    email: string;
    bio: string;
    password: string;
}
export declare class LoginReqDto {
    username: string;
    password: string;
}
