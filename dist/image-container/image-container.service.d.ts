import { DonateSession } from 'src/donate-session/entities/donate-session.entity';
import { Repository } from 'typeorm';
import { CreateImageInput } from './dtos/create-image.dto';
import { ImageContainer } from './entities/image-container';
export declare class ImageContainerService {
    private readonly images;
    private readonly donates;
    constructor(images: Repository<ImageContainer>, donates: Repository<DonateSession>);
    createImage({ imageUrl, donateId }: CreateImageInput): Promise<{
        ok: boolean;
        error?: string;
    }>;
}
