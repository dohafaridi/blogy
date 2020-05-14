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
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = require("class-validator");
class GetSessionResDto {
}
exports.GetSessionResDto = GetSessionResDto;
class RegisterResDto extends GetSessionResDto {
}
__decorate([
    class_validator_1.IsJWT(),
    __metadata("design:type", String)
], RegisterResDto.prototype, "token", void 0);
exports.RegisterResDto = RegisterResDto;
class LoginResDto extends RegisterResDto {
}
exports.LoginResDto = LoginResDto;
class RegisterReqDto {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], RegisterReqDto.prototype, "username", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsEmail(),
    __metadata("design:type", String)
], RegisterReqDto.prototype, "email", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], RegisterReqDto.prototype, "bio", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.Matches(/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$./, {
        message: 'password too weak',
    }),
    __metadata("design:type", String)
], RegisterReqDto.prototype, "password", void 0);
exports.RegisterReqDto = RegisterReqDto;
class LoginReqDto {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], LoginReqDto.prototype, "username", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], LoginReqDto.prototype, "password", void 0);
exports.LoginReqDto = LoginReqDto;
//# sourceMappingURL=user.dto.js.map