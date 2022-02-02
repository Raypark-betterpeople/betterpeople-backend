import { Module } from '@nestjs/common';
import { UploadsController, UploadsController2 } from './uploads.controller';

@Module({
    controllers: [UploadsController, UploadsController2]
})
export class UploadsModule {}
