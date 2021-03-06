import { DynamicModule } from '@nestjs/common';
import { MailModuleOptions } from './mail.interfaces';
export declare class MailModule {
    static forRoot(option: MailModuleOptions): DynamicModule;
}
