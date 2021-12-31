import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DonateSession } from 'src/donate-session/entities/donate-session.entity';
import { ImageContainer } from 'src/image-container/entities/image-container';
import { ProvideImage } from './entities/provide-image.entity';
import { ProvideImageResolver } from './provide-image.resolver';
import { ProvideImageService } from './provide-image.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProvideImage,DonateSession,ImageContainer])],
  providers: [
    ProvideImageResolver,
    ProvideImageService,
  ],
})
export class ProvideImageModule {}
