import * as path from 'path';

const envDir = path.resolve(__dirname, '../../.env');
const NODE_ENV = 'development'; // @todo: refacto

require('dotenv-safe').config({
  allowEmptyValues: true,
  example: path.join(envDir, '_example'),
  path: path.join(envDir, NODE_ENV),
});
