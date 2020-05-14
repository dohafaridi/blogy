import { Module, Global } from '@nestjs/common';

import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { JwtStrategy, JWT_SECRET, DEFAULT_STATEGIE } from './jwt.strategy';

export { UseGuards, JwtAuthGuard } from './jwt-auth.guard';

export { JwtSession } from './jwt-session.decorator';

@Global()
@Module({
  imports: [
    PassportModule.register({ defaultStrategy: DEFAULT_STATEGIE }),
    JwtModule.register({
      secret: JWT_SECRET,
      // signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [JwtStrategy],
  exports: [JwtModule],
})
export class AuthModule {}
