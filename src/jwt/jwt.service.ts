import { Inject, Injectable } from '@nestjs/common';
import { JwtModuleOptions } from './interfaces/jwt-module-options.interface';
import { CONFIG_OPTIONS } from '../common/common.constant';
import * as jwt from 'jsonwebtoken'

@Injectable()
export class JwtService {
    constructor(@Inject(CONFIG_OPTIONS) private readonly options: JwtModuleOptions) {}
    signToken(payload: object): string {
        return jwt.sign(payload, this.options.privateKey)
    }
    verifyToken(token: string) {
        return jwt.verify(token, this.options.privateKey)
    }
}
