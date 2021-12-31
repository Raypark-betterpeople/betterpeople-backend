import { MutationOutput } from 'src/common/dtos/output.dto';
import { ImageContainer } from '../entities/image-container';
declare const CreateImageInput_base: import("@nestjs/common").Type<Pick<ImageContainer, "imageUrl">>;
export declare class CreateImageInput extends CreateImageInput_base {
    donateId: number;
}
export declare class CreateImageOutput extends MutationOutput {
}
export {};
