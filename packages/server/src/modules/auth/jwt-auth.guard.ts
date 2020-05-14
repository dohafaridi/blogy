import { Injectable, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { DEFAULT_STATEGIE } from './jwt.strategy';

export { UseGuards };

@Injectable()
export class JwtAuthGuard extends AuthGuard(DEFAULT_STATEGIE) {}
