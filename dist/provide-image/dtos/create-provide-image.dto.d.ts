import { MutationOutput } from "src/common/dtos/output.dto";
import { ProvideImage } from "../entities/provide-image.entity";
declare const CreateProvideImageInput_base: import("@nestjs/common").Type<Omit<ProvideImage, "id" | "createAt" | "updateAt" | "providingUser" | "imageUrl" | "token">>;
export declare class CreateProvideImageInput extends CreateProvideImageInput_base {
}
export declare class CreateProvideImageOutput extends MutationOutput {
}
export {};
