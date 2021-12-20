import { CreateImageInput, CreateImageOutput } from './dtos/create-image.dto';
import { ImageContainerService } from './image-container.service';
export declare class ImageContainerResolver {
    private readonly imageContainerService;
    constructor(imageContainerService: ImageContainerService);
    createImage(createImageInput: CreateImageInput): Promise<CreateImageOutput>;
}
