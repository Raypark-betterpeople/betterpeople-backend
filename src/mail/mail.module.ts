import { DynamicModule, Module } from '@nestjs/common';
import { CONFIG_OPTIONS } from 'src/common/common.constant';
import { MailModuleOptions } from './mail.interfaces';

@Module({})
export class MailModule {
  static forRoot(option: MailModuleOptions): DynamicModule {
    return {
      module: MailModule,
      providers: [
        {
          provide: CONFIG_OPTIONS,
          useValue: option,
        },
      ],
      exports: [],
    };
  }
}
