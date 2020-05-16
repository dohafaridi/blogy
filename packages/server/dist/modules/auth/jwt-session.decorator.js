"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtSession = void 0;
const common_1 = require("@nestjs/common");
exports.JwtSession = common_1.createParamDecorator((data, req) => {
    return req.user;
});
//# sourceMappingURL=jwt-session.decorator.js.map