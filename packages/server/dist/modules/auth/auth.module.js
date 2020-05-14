"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
const jwt_strategy_1 = require("./jwt.strategy");
var jwt_auth_guard_1 = require("./jwt-auth.guard");
exports.UseGuards = jwt_auth_guard_1.UseGuards;
exports.JwtAuthGuard = jwt_auth_guard_1.JwtAuthGuard;
var jwt_session_decorator_1 = require("./jwt-session.decorator");
exports.JwtSession = jwt_session_decorator_1.JwtSession;
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    common_1.Global(),
    common_1.Module({
        imports: [
            passport_1.PassportModule.register({ defaultStrategy: jwt_strategy_1.DEFAULT_STATEGIE }),
            jwt_1.JwtModule.register({
                secret: jwt_strategy_1.JWT_SECRET,
            }),
        ],
        providers: [jwt_strategy_1.JwtStrategy],
        exports: [jwt_1.JwtModule],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map