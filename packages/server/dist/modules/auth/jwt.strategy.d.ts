import { Strategy } from 'passport-jwt';
export declare const JWT_SECRET: string;
export declare const DEFAULT_STATEGIE = "jwt";
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor();
    validate(payload: any): Promise<{
        userId: any;
        username: any;
    }>;
}
export {};
