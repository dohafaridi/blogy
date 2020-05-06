const env = require('env-var');

const TYPEORM_TYPE = env
  .get('TYPEORM_TYPE')
  .required()
  .asEnum(['sqlite', 'mysql', 'postgres']);

module.exports = {
  name: env.get('TYPEORM_NAME').asString(),
  type: TYPEORM_TYPE,
  database: env.get('TYPEORM_DATABASE').asString(),
  synchronize: env.get('TYPEORM_SYNCHRONIZE').asBool(),
  logging: env.get('TYPEORM_LOGGING').asBool(),
  entities: [__dirname + '/dist/**/**.entity.js'],
};
