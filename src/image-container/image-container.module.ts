import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImageContainer } from './entities/image-container';
import { ImageContainerResolver } from './image-container.resolver';
import { ImageContainerService } from './image-container.service';

@Module({
    imports: [TypeOrmModule.forFeature([ImageContainer])],
    providers: [ImageContainerResolver, ImageContainerService]
})
export class ImageContainerModule {}
