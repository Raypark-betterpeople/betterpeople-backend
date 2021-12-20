import { MutationOutput } from "src/common/dtos/output.dto";
import { ProvideImage } from "../entities/provide-image.entity";
declare const CreateProvideImageInput_base: import("@nestjs/common").Type<Omit<ProvideImage, "id" | "providingUser" | "imageUrl" | "createAt" | "updateAt" | "token">>;
export declare class CreateProvideImageInput extends CreateProvideImageInput_base {
}
export declare class CreateProvideImageOutput extends MutationOutput {
}
export {};
