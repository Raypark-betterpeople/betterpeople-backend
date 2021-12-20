import { CreateProvideImageOutput } from './dtos/create-provide-image.dto';
import { ProvideImageService } from './provide-image.service';
export declare class ProvideImageResolver {
    private readonly provideImageService;
    constructor(provideImageService: ProvideImageService);
    createProvideImage(context: any): Promise<CreateProvideImageOutput>;
    hi(): boolean;
}
