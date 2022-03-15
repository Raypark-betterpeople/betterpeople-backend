import { MutationOutput } from "src/common/dtos/output.dto";
import { ProvideImage } from "../entities/provide-image.entity";
export declare class MyImagesOutput extends MutationOutput {
    myImage?: ProvideImage[];
}
