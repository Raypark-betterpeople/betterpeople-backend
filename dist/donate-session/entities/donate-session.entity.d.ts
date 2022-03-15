import { CoreEntity } from "src/common/entities/core.entity";
import { ImageContainer } from "src/image-container/entities/image-container";
export declare class DonateSession extends CoreEntity {
    title: string;
    description: string;
    coverImg?: string;
    descriptionImg?: string;
    durationTime: string;
    donateImage?: ImageContainer[];
}
