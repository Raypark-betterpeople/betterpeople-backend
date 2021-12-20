import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImageContainer } from 'src/image-container/entities/image-container';
import { ImageContainerResolver } from 'src/image-container/image-container.resolver';
import { ImageContainerService } from 'src/image-container/image-container.service';
import { ProvideImage } from './entities/provide-image.entity';
import { ProvideImageResolver } from './provide-image.resolver';
import { ProvideImageService } from './provide-image.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProvideImage, ImageContainer])],
  providers: [
    ProvideImageResolver,
    ProvideImageService,
    ImageContainerService,
    ImageContainerResolver,
  ],
})
export class ProvideImageModule {}
