"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const envDir = path.resolve(__dirname, '../../.env');
const NODE_ENV = 'development';
require('dotenv-safe').config({
    allowEmptyValues: true,
    example: path.join(envDir, '_example'),
    path: path.join(envDir, NODE_ENV),
});
//# sourceMappingURL=applyEnvVars.js.map