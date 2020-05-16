"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const user_service_1 = require("./user.service");
const user_dto_1 = require("./user.dto");
const auth_module_1 = require("../auth/auth.module");
let UserController = (() => {
    let UserController = class UserController {
        constructor(userService, jwtService) {
            this.userService = userService;
            this.jwtService = jwtService;
        }
        async register(registerReqDto) {
            const session = this.userService.register(registerReqDto);
            return Object.assign({ token: this.jwtService.sign(session) }, session);
        }
        async login(loginReq) {
            const session = await this.userService.login(loginReq);
            return Object.assign({ token: this.jwtService.sign(session) }, session);
        }
        getSession(session) {
            return session;
        }
    };
    __decorate([
        common_1.Post('register'),
        __param(0, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [user_dto_1.RegisterReqDto]),
        __metadata("design:returntype", Promise)
    ], UserController.prototype, "register", null);
    __decorate([
        common_1.Post('login'),
        __param(0, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [user_dto_1.LoginReqDto]),
        __metadata("design:returntype", Promise)
    ], UserController.prototype, "login", null);
    __decorate([
        auth_module_1.UseGuards(auth_module_1.JwtAuthGuard),
        common_1.Get('session'),
        __param(0, auth_module_1.JwtSession()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], UserController.prototype, "getSession", null);
    UserController = __decorate([
        common_1.Controller('user'),
        __metadata("design:paramtypes", [user_service_1.UserService,
            jwt_1.JwtService])
    ], UserController);
    return UserController;
})();
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map