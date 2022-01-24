import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import * as AWS from 'aws-sdk';

const BUCKET_NAME = 'betterpeoplepixelillust';

@Controller('uploads')
export class UploadsController {
  @Post('')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file) {
    AWS.config.update({
      region: 'ap-northeast-2',
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_KEY,
      },
    });
    try {
      const objectName = `${Date.now() + file.originalname}`;
      await new AWS.S3()
        .putObject({
          Key: `${Date.now() + file.originalname}`,
          Body: file.buffer,
          Bucket: BUCKET_NAME,
          ACL: 'public-read',
        })
        .promise();
      const url = `https://${BUCKET_NAME}.s3.ap-northeast-2.amazonaws.com/${objectName}`;
      return { url };
    } catch (error) {
      return null;
    }
  }
}
