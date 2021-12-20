import { Repository } from 'typeorm';
import { CreateImageInput } from './dtos/create-image.dto';
import { ImageContainer } from './entities/image-container';
export declare class ImageContainerService {
    private readonly images;
    constructor(images: Repository<ImageContainer>);
    createImage({ diceNumber, imageUrl, }: CreateImageInput): Promise<{
        ok: boolean;
        error?: string;
    }>;
}
