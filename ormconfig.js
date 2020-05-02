const env = require('env-var');

module.exports = {
  type: env.get('TYPEORM_CONNECTION').asString(),
  host: env.get('TYPEORM_HOST').asString(),
  port: env.get('TYPEORM_PORT').asString(),
  username: env.get('TYPEORM_USERNAME').asString(),
  password: env.get('TYPEORM_PASSWORD').asString(),
  database: env.get('TYPEORM_DATABASE').asString(),
  dropSchema: env.get('TYPEORM_DROP_SCHEMA').asBool(),
  logging: env.get('TYPEORM_LOGGING').asBool(),
  entities: ['dist/**/*.entity{.ts,.js}'],
};
