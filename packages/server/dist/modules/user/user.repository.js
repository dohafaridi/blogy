"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const user_entity_1 = require("./user.entity");
let UserRepository = (() => {
    let UserRepository = class UserRepository extends typeorm_1.Repository {
        async ensureUsernameUnique(username) {
            const user = await this.findOne({ username });
            console.log(user);
            if (user) {
                throw new common_1.ConflictException(`'Username ${username} is unavailable. Please try another.'`);
            }
        }
        async register(registerReq) {
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
        async login(loginReqDto) {
            const targetUser = await this.findOne(loginReqDto);
            if (!targetUser) {
                throw new common_1.UnprocessableEntityException('The username and/or password you entered did not match our records. Please double-check and try again.');
            }
            return {
                id: targetUser.id,
                username: targetUser.username,
            };
        }
    };
    UserRepository = __decorate([
        typeorm_1.EntityRepository(user_entity_1.UserEntity)
    ], UserRepository);
    return UserRepository;
})();
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map