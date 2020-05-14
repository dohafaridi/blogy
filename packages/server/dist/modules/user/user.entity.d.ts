import { BaseEntity } from 'typeorm';
export declare class UserEntity extends BaseEntity {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    username: string;
    bio: string;
    email: string;
    password: string;
}
