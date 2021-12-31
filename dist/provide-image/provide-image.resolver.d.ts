import { CreateProvideImageInput, CreateProvideImageOutput } from './dtos/create-provide-image.dto';
import { VerifyImageSearchInput, VerifyImageSearchOutput } from './dtos/verify-image-search.dto';
import { ProvideImageService } from './provide-image.service';
export declare class ProvideImageResolver {
    private readonly provideImageService;
    constructor(provideImageService: ProvideImageService);
    createProvideImage(createProvideImageInput: CreateProvideImageInput, context: any): Promise<CreateProvideImageOutput>;
    searchVerifyImage(verifyImageSearchInput: VerifyImageSearchInput): Promise<VerifyImageSearchOutput>;
}
