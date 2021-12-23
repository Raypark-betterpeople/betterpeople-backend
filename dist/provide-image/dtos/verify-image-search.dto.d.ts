import { MutationOutput } from "src/common/dtos/output.dto";
import { ProvideImage } from "../entities/provide-image.entity";
declare const VerifyImageSearchInput_base: import("@nestjs/common").Type<Pick<ProvideImage, "token">>;
export declare class VerifyImageSearchInput extends VerifyImageSearchInput_base {
}
export declare class VerifyImageSearchOutput extends MutationOutput {
    verifyImage?: ProvideImage;
}
export {};
