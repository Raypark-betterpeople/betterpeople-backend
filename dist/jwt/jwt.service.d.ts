import { JwtModuleOptions } from './interfaces/jwt-module-options.interface';
import * as jwt from 'jsonwebtoken';
export declare class JwtService {
    private readonly options;
    constructor(options: JwtModuleOptions);
    signToken(payload: object): string;
    verifyToken(token: string): string | jwt.JwtPayload;
}
