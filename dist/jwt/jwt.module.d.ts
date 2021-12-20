import { DynamicModule } from '@nestjs/common';
import { JwtModuleOptions } from './interfaces/jwt-module-options.interface';
export declare class JwtModule {
    static forRoot(options: JwtModuleOptions): DynamicModule;
}
