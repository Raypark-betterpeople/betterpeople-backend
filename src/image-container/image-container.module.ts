import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DonateSession } from 'src/donate-session/entities/donate-session.entity';
import { ImageContainer } from './entities/image-container';
import { ImageContainerResolver } from './image-container.resolver';
import { ImageContainerService } from './image-container.service';

@Module({
    imports: [TypeOrmModule.forFeature([ImageContainer, DonateSession])],
    providers: [ImageContainerResolver, ImageContainerService]
})
export class ImageContainerModule {}
